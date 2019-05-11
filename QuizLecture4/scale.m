function x_new=scale(x)
	x_new=(x-mean(x))/(max(x)-min(x))
endfunction
