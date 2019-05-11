function ys= hypothesis(theta,X)
	% every row of X represents a trainingset
	% every column a feature
	% so the first column should contain only ones
	assert(X(:,1)==1);
	%ys has the same number of rows as X
	ys= X*theta;
end

