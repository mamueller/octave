function p = predict(Theta1, Theta2, X)
%PREDICT Predict the label of an input given a trained neural network
%   p = PREDICT(Theta1, Theta2, X) outputs the predicted label of X given the
%   trained weights of a neural network (Theta1, Theta2)

% Useful values
m = size(X, 1);
num_labels_1 = size(Theta1, 1);
num_labels_2 = size(Theta2, 1);

% You need to return the following variables correctly 
p = zeros(size(X, 1), 1);

% ====================== YOUR CODE HERE ======================
% Instructions: Complete the following code to make predictions using
%               your learned neural network. You should set p to a 
%               vector containing labels between 1 to num_labels.
%
% Hint: The max function might come in useful. In particular, the max
%       function can also return the index of the max element, for more
%       information see 'help max'. If your examples are in rows, then, you
%       can use max(A, [], 2) to obtain the max for each row.
%
% =========================================================================

% mm solution
% first add the arbitrary feature 1
a1=[ones(1,m); X']; %400+1 rows 5000 columns
% in the first step we treat our input X (renamed a1) as of ot was a classification problem with 25 classes
a2=[ones(1,m); sigmoid(Theta1*a1)]; %25+1rows 5000 columns
a3=[sigmoid(Theta2*a2)]; %10rows 5000 columns (since we do not use it for another iteration we do
% not have to add the row with ones
[max_prob,p_trans]=max(a3);
p=p_trans';
end
