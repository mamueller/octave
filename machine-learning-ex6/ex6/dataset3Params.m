function [C, sigma] = dataset3Params(X, y, Xval, yval)
%DATASET3PARAMS returns your choice of C and sigma for Part 3 of the exercise
%where you select the optimal (C, sigma) learning parameters to use for SVM
%with RBF kernel
%   [C, sigma] = DATASET3PARAMS(X, y, Xval, yval) returns your choice of C and 
%   sigma. You should complete this function to return the optimal C and 
%   sigma based on a cross-validation set.
%

% You need to return the following variables correctly.
%C = 1;
%sigma = 0.3;

% ====================== YOUR CODE HERE ======================
% Instructions: Fill in this function to return the optimal C and sigma
%               learning parameters found using the cross validation set.
%               You can use svmPredict to predict the labels on the cross
%               validation set. For example, 
%                   predictions = svmPredict(model, Xval);
%               will return the predictions on the cross validation set.
%
%  Note: You can compute the prediction error using 
%        mean(double(predictions ~= yval))
%
n1=8;
n2=8;
f=sqrt(10)
errs=zeros(n1,n2)
for i=1:n1 
	Cs(i,1)=0.01*f**(i-1);
end
for j=1:n2 
	sigmas(j,1)=0.01*f**(j-1);
end

for i=1:n1
	C=Cs(i)
	for j=1:n2
		sigma=sigmas(j)
		errs(i,j)=cve(X,y,Xval,yval,C,sigma)
	end
end
errs
[colminima,row_ids]=min(errs)
[matmin,col]=min(colminima)
row=row_ids(col)
% the minimum is matmin= err(row,col)
% the optimal C and sigma
C=Cs(row)
sigma=sigmas(col)

% =========================================================================

end
