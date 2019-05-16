function plotData(X, y)
%PLOTDATA Plots the data points X and y into a new figure 
%   PLOTDATA(x,y) plots the data points with + for the positive examples
%   and o for the negative examples. X is assumed to be a Mx2 matrix.

% Create New Figure

% ====================== YOUR CODE HERE ======================
% Instructions: Plot the positive and negative examples on a
%               2D plot, using the option 'k+' for the positive
%               examples and 'ko' for the negative examples.
%
figure; hold on;
one_X=X(find(y==1),:);
one_FMT='+k;y=1 Admitted;';
zero_X=X(find(y==0),:);
zero_FMT='ok;y=0 Not admitted;';
my2dplot(one_X,one_FMT)
my2dplot(zero_X,zero_FMT)
% =========================================================================
hold off;

end

