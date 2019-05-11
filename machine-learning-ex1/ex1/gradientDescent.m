function [theta, J_history] = gradientDescent(X, y, theta, alpha, num_iters)
%GRADIENTDESCENT Performs gradient descent to learn theta
%   theta = GRADIENTDESCENT(X, y, theta, alpha, num_iters) updates theta by 
%   taking num_iters gradient steps with learning rate alpha

% Initialize some useful values
m = length(y); % number of training examples
J_history = zeros(num_iters, 1);

for iter = 1:num_iters

    % ====================== YOUR CODE HERE ======================
    % Instructions: Perform a single gradient step on the parameter vector
    %               theta. 
    %
    % Hint: While debugging, it can be useful to print out the values
    %       of the cost function (computeCost) and gradient here.
    % J=1/2m <(h(theta,X)-y),(h(theta,X)-y)>

    %  =1/2m sum_i(h(theta,X(i,:))-y(i))^2
    %           (d_J/d_theta_0) 
    % => grad J=(d_J/d_theta_1) = 1/m (sum_i (h(theta,X(i,:))-y(i))* d/d_theta h(theta,X(i,:)))'
    %           (    ...      )
    %           (d_j/d_theta_n)
    %                       	= 1/m (sum_i (h(theta,X(i,:))-y(i))) *X(i,:))'
    %                       	= 1/m (h(theta,X)-y)' * X)'
    %                       	= 1/m X'* (h(theta,X)-y)
    %d=hypothesis(theta,X)-y
    d=X*theta-y;
    theta=theta-alpha*1/m *X'*d;






    % ============================================================

    % Save the cost J in every iteration    
    c=computeCost(X, y, theta);
    J_history(iter) =c; 

end

end
