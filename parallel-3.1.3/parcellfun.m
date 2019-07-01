## Copyright (C) 2009 VZLU Prague, a.s., Czech Republic
##
## This program is free software; you can redistribute it and/or modify it under
## the terms of the GNU General Public License as published by the Free Software
## Foundation; either version 3 of the License, or (at your option) any later
## version.
##
## This program is distributed in the hope that it will be useful, but WITHOUT
## ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
## FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
## details.
##
## You should have received a copy of the GNU General Public License along with
## this program; if not, see <http://www.gnu.org/licenses/>.

## -*- texinfo -*-
## @deftypefn{Function File} {[@var{o1}, @var{o2}, @dots{}] =} parcellfun (@var{nproc}, @var{fun}, @var{a1}, @var{a2}, @dots{})
## @deftypefnx{Function File} {} parcellfun (nproc, fun, @dots{}, "UniformOutput", @var{val})
## @deftypefnx{Function File} {} parcellfun (nproc, fun, @dots{}, "ErrorHandler", @var{errfunc})
## @deftypefnx{Function File} {} parcellfun (nproc, fun, @dots{}, "VerboseLevel", @var{val})
## @deftypefnx{Function File} {} parcellfun (nproc, fun, @dots{}, "ChunksPerProc", @var{val})
## @deftypefnx{Function File} {} parcellfun (nproc, fun, @dots{}, "CumFunc", @var{cumfunc})
## Evaluates a function for multiple argument sets using multiple processes.
## @var{nproc} should specify the number of processes. A maximum recommended value is
## equal to number of CPUs on your machine or one less.
## @var{fun} is a function handle pointing to the requested evaluating function.
## @var{a1}, @var{a2} etc. should be cell arrays of equal size.
## @var{o1}, @var{o2} etc. will be set to corresponding output arguments.
##
## The UniformOutput and ErrorHandler options are supported with meaning identical
## to @dfn{cellfun}.
## A VerboseLevel option controlling the level output is supported.
## A value of 0 is quiet, 1 is normal, and 2 or more enables
## debugging output.
## The ChunksPerProc option control the number of chunks which contains elementary jobs. This
## option particularly useful when time execution of function is small. Setting this option
## to 100 is a good choice in most cases.
##
## Instead of returning a result for each argument, parcellfun returns
## only one cumulative result if "CumFunc" is non-empty. @var{cumfunc}
## must be a function which performs an operation on two sets of
## outputs of @var{fun} and returnes as many outputs as @var{fun}. If
## @var{nout} is the number of outputs of @var{fun}, @var{cumfunc}
## gets a previous output set of @var{fun} or of @var{cumfunc} as
## first @var{nout} arguments and the current output of @var{fun} as
## last @var{nout} arguments. The performed operation must be
## mathematically commutative and associative. If the operation is
## e.g. addition, the result will be the sum(s) of the outputs of
## @var{fun} over all calls of @var{fun}. Since floating point
## addition and multiplication are only approximately associative, the
## cumulative result will not be exactly reproducible.
##
## Notice that jobs are served from a single first-come first-served queue,
## so the number of jobs executed by each process is generally unpredictable.
## This means, for example, that when using this function to perform Monte-Carlo
## simulations one cannot expect results to be exactly reproducible.  The pseudo
## random number generators of each process are initialised with a unique state.
## This currently works only for new style generators.
##
## NOTE: this function is implemented using "fork" and a number of pipes for IPC.
## Suitable for systems with an efficient "fork" implementation (such as GNU/Linux),
## on other systems (Windows) it should be used with caution.
## Also, if you use a multithreaded BLAS, it may be wise to turn off multi-threading
## when using this function.
##
## CAUTION: This function should be regarded as experimental. Although all subprocesses
## should be cleared in theory, there is always a danger of a subprocess hanging up,
## especially if unhandled errors occur. Under GNU and compatible systems, the following
## shell command may be used to display orphaned Octave processes:
## ps --ppid 1 | grep octave
##
## @end deftypefn

## Author: Jaroslav Hajek <highegg@gmail.com>
## Several improvements thanks to: Travis Collier <travcollier@gmail.com>
## CumFunc feature added by Olaf Till <i7tiol@t-online.de>

function varargout = parcellfun (nproc, fun, varargin)

  ## The list of functions to be seeded in each slave.
  persistent random_func_list = {@rand, @randn, @rande, @randp, @randg};

  if (nargin < 3 || ! isscalar (nproc) || nproc <= 0)
    print_usage ();
  endif

  if (ischar (fun))
    fun = str2func (fun);
  elseif (! isa (fun, "function_handle"))
    error ("parcellfun: fun must be either a function handle or name")
  endif

  [nargs, uniform_output, error_handler, verbose_level, ...
   chunks_per_proc, cumfunc] = parcellfun_opts ("parcellfun", varargin);

  accumulate = ifelse (isempty (cumfunc), false, true);

  args = varargin(1:nargs);
  if (! all (cellfun ("isclass", args, "cell")))
    error ("parcellfun: all non-option arguments except the first one must be cell arrays");
  endif

  if (nargs == 0)
    print_usage ();
  elseif (nargs > 1)
    [err, args{:}] = common_size (args{:});
    if (err)
      error ("parcellfun: arguments size must match");
    endif
  endif

  njobs = numel (args{1});

  if (chunks_per_proc > 0 && chunks_per_proc < njobs / nproc)
    ## We need chunked evaluation.

    if (accumulate)
      chunk_uniform_output = false;
    else
      chunk_uniform_output = uniform_output;
    endif

    ## Function executed for a chunk.
    if (isempty (error_handler))
      chunk_fun = @(varargin) cellfun (fun, varargin{:},
                                       "UniformOutput", chunk_uniform_output);
    else
      chunk_fun = @(varargin) cellfun (fun, varargin{:},
                                       "UniformOutput", chunk_uniform_output,
                                       "ErrorHandler", error_handler);
    endif

    if (accumulate)
      chunk_fun = @(varargin) acc_chunk_fun (cumfunc, chunk_fun, varargin{:});
    endif

    [varargout{1:nargout}] = chunk_parcellfun (nproc, chunks_per_proc,
                                               chunk_fun, [], verbose_level,
                                               cumfunc, uniform_output,
                                               args{:});
    return
  endif

  nproc = min (nproc, numel (args{1}));

  ## create communication pipes.
  cmdr = cmdw = resr = resw = zeros (nproc, 1);
  err = 0;
  for i = 1:nproc
    ## command pipes
    [cmdr(i), cmdw(i), err, msg] = pipe ();
    if (err)
      break;
    endif
    ## result pipes
    [resr(i), resw(i), err, msg] = pipe ();
    if (err)
      break;
    endif
  endfor
  if (! err)
    ## status pipe
    [statr, statw, err, msg] = pipe ();
  endif
  if (err)
    error ("failed to open pipe: %s", msg);
  endif

  iproc = 0; # the parent process
  nsuc = 0; # number of processes succesfully forked.

  fflush (stdout); # prevent subprocesses from inheriting buffered output

  ## get a seed and change state
  seed = rand;

  pids = zeros (nproc, 1);

  ## fork subprocesses
  for i = 1:nproc
    [pid, msg] = fork ();
    if (pid > 0)
      ## parent process. fork succeded.
      nsuc ++;
      pids(i) = pid;
      if (verbose_level > 1)
        fprintf (stderr,"parcellfun: child process %d created\n", pids(i));
        fflush (stderr);
      endif
    elseif (pid == 0)
      ## child process.
      iproc = i;
      break;
    elseif (pid < 0)
      ## parent process. fork failed.
      err = 1;
      break;
    endif
  endfor

  if (iproc)
    ## child process. close unnecessary pipe ends.
    fclose (statr);
    for i = 1:nproc
      ## we won't write commands and read results
      fclose (cmdw (i));
      fclose (resr (i));
      if (i != iproc)
        ## close also those pipes that don't belong to us.
        fclose (cmdr (i));
        fclose (resw (i));
      endif
    endfor
  else
    ## parent process. close unnecessary pipe ends.
    fclose (statw);
    for i = 1:nproc
      ## we won't read commands and write results
      fclose (cmdr (i));
      fclose (resw (i));
    endfor

    if (nproc)
      if (nsuc)
        ## we forked some processes. if this is less than we opted
        ## for, gripe but continue.
        if (nsuc < nproc)
          warning ("parcellfun: only %d out of %d processes forked",
                   nsuc, nproc);
          nproc = nsuc;
        endif
      else
        ## this is bad.
        error ("parcellfun: failed to fork processes");
      endif
    endif
  endif

  ## At this point, everything should be OK (?)

  if (iproc)
    ## the border patrol. we really don't want errors escape after the forks.
    unwind_protect
      try
        ## re-seed random number states, adjusted for each process
        seed *= iproc * (flintmax () - 1); # backwards compatibility
        cellfun (@ (fun) fun ("state", seed), random_func_list);

        ## child process. indicate ready state.
        fwrite (statw, -iproc, "double");
        fflush (statw);

        do
          ## get command
          cmd = fread (cmdr(iproc), 1, "double");
          if (cmd)
            ## we've got a job to do. prepare argument and return lists.
            res = cell (1, nargout);
            argsc = cell (1, nargs);
            for i = 1:nargs
              argsc{i} = args{i}{cmd};
            endfor

            if (isempty (error_handler))
              ## unguarded evaluation.
              [res{:}] = fun (argsc{:});
            else
              ## guarded evaluation
              try
                [res{:}] = fun (argsc{:});
              catch
                errs = lasterror (); # fields 'message', 'identifier', 'stack'
                errs.index = cmd;
                [res{:}] = error_handler (errs, argsc{:});
              end_try_catch
            endif

            ## indicate ready state.
            fwrite (statw, iproc, "double");
            fflush (statw);

            ## write the result.
            ## FIXME: this can fail.
            fsave (resw(iproc), res);
            fflush (resw(iproc));

          endif
        until (cmd == 0)

      catch

        ## just indicate the error. don't quit this function !!!!
        fputs (stderr, "\n");
        warning ("parcellfun: unhandled error in subprocess %d", iproc);

        ## send a termination notice.
        fwrite (statw, -iproc, "double");
        fflush (statw);

      end_try_catch

    unwind_protect_cleanup

      ## This is enclosed in another handler to prevent errors from escaping.
      ## If something goes wrong, we'll get a broken pipe signal, but anything
      ## is better than skipping the following __exit__.
      try
        fclose (statw);
        fclose (resw(iproc));
        fclose (cmdr(iproc));
      end_try_catch

      ## no more work for us. We call __exit__, which bypasses termination sequences.
      __exit__ ();

      ## we should never get here.
      exit ();

    end_unwind_protect

  else
    ## parent process.
    if (accumulate)
      res = cell (nargout, 1);
    else
      res = cell (nargout, njobs);
    endif

    firstresult = true;
    pjobs = 0;
    stop = false;
    pending = zeros (1, nproc);
    ## we need these flags additionally to 'pending' because 1) a child
    ## might send a result (so pending is set to false) and yet signal
    ## failure and exit due to an error in sending (which would be
    ## mistaken for a 'ready' signal if only 'pending' is checked) and
    ## 2) a child might not signal to be ready until all jobs are
    ## finished, so pending never gets true (see where the flags are
    ## used)
    ready = false (1, nproc);
    terminated = false (1, nproc);

    unwind_protect

      while ((pjobs < njobs && ! stop) || any (pending))
        ## wait for a process state.
        isubp = fread (statr, 1, "double");
        ## if pipe contained no more data, that's bad
        if (feof (statr))
          warning ("parcellfun: premature exit due to closed pipe");
          break;
        endif
        if (isubp > 0)
          ijob = pending(isubp);
          ## we have a result ready.
          if (accumulate)
            if (firstresult)
              res(:, 1) = fload (resr(isubp));
              firstresult = false;
            else
              [res{:, 1}] = cumfunc (res{:}, fload (resr(isubp)){:});
            endif
          else
            res(:, ijob) = fload (resr(isubp));
          endif
          ## clear pending state
          pending(isubp) = 0;
        else
          isubp = -isubp;
          if (ready(isubp))
            ## premature exit means an unhandled error occurred in a subprocess.
            ## the process should have griped, we just try to exit gracefully.
            pending(isubp) = 0;
            terminated(isubp) = true;
            ## no more jobs to start.
            stop = true;
            ## skip the rest; don't send commands to the process.
            fclose(cmdw(isubp));
            continue;
          else
            ready(isubp) = true;
          endif
        endif
        if (pjobs < njobs && ! stop)
          ijob = ++pjobs;
          ## send the next job to the process.
          fwrite (cmdw(isubp), ijob, "double");
          fflush (cmdw(isubp));
          ## set pending state
          pending(isubp) = ijob;
        else
          ## send terminating signal
          fwrite (cmdw(isubp), 0, "double");
          fclose (cmdw(isubp));
          terminated(isubp) = true;
        endif
        if (verbose_level > 0)
          fprintf (stderr, "\rparcellfun: %d/%d jobs done", pjobs - sum (pending != 0), njobs);
          fflush (stderr);
        endif
      endwhile

      if (verbose_level > 0)
        fputs (stderr, "\n");
        fflush (stderr);
      endif

    unwind_protect_cleanup

      ## send termination signals to active processes.
      for isubp = find (! terminated)
        ## send terminating signal
        fwrite (cmdw(isubp), 0, "double");
        fclose (cmdw(isubp));
      endfor

      ## explicitly recognize all terminated processes.
      for i = 1:nproc
        if (verbose_level > 1)
          fprintf(stderr,"parcellfun: waiting for child process %d to close\n", pids(i));
          fflush (stderr);
        endif
        [pid, status] = waitpid (pids(i));
      endfor

      ## FIXME: I think order is possibly important here, and this is correct.
      ## close all pipe ends
      fclose (statr);
      for i = 1:nproc
        fclose (resr(i));
      endfor

    end_unwind_protect

    ## we're finished. transform the result.
    if (accumulate)
      if (uniform_output)
        varargout = res;
      else
        varargout = num2cell (res);
      endif
    else
      varargout = cell (1, nargout);
      shape = size (varargin{1});
      for i = 1:nargout
        ## reshape is done after cell2mat because of bug #51448
        if (uniform_output)
          varargout{i} = cell2mat (res(i, :));
        else
          varargout{i} = res(i, :);
        endif
        varargout{i} = reshape (varargout{i}, shape);
      endfor
    endif

  endif

endfunction

function varargout = acc_chunk_fun (cumfunc, chunk_fun, varargin)

  [chunk_out{1:nargout}] = chunk_fun (varargin{:});

  nel = numel (chunk_out{1});

  chunk_out = horzcat (chunk_out{:});

  res = chunk_out(1, :);

  for (id = 2 : nel)
    [res{:}] = cumfunc (res{:}, chunk_out{id, :});
  endfor

  varargout = res;

endfunction

%!test
%! assert (res = parcellfun (4, @ (x, y) x * y, {1, 2, 3, 4}, {2, 3, 4, 5}, "VerboseLevel", 0), [2, 6, 12, 20])

%!test
%! assert (res = parcellfun (4, @ (x, y) x * y, {1, 2, 3, 4}, {2, 3, 4, 5}, "VerboseLevel", 0, "UniformOutput", false), {2, 6, 12, 20})

%!test
%! assert (res = parcellfun (2, @ (x, y) x * y, {1, 2, 3, 4}, {2, 3, 4, 5}, "VerboseLevel", 0, "ChunksPerProc", 2), [2, 6, 12, 20])

%!test
%! assert (res = parcellfun (4, @ (x, y) x * y, {1, 2, 3, 4}, {2, 3, 4, 5}, "VerboseLevel", 0, "CumFunc", @ (a, b) a + b), 40)

%!test
%! assert (res = parcellfun (2, @ (x, y) x * y, {1, 2, 3, 4}, {2, 3, 4, 5}, "VerboseLevel", 0, "ChunksPerProc", 2, "CumFunc", @ (a, b) a + b), 40)
