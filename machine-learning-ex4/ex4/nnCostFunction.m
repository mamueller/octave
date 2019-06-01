function [J grad] = nnCostFunction(nn_params, ...
	                                   input_layer_size, ...
	                                   hidden_layer_size, ...
	                                   num_labels, ...
	                                   X, y, lambda)
	%NNCOSTFUNCTION Implements the neural network cost function for a two layer
	%neural network which performs classification
	%   [J grad] = NNCOSTFUNCTON(nn_params, hidden_layer_size, num_labels, ...
	%   X, y, lambda) computes the cost and gradient of the neural network. The
	%   parameters for the neural network are "unrolled" into the vector
	%   nn_params and need to be converted back into the weight matrices. 
	% 
	%   The returned parameter grad should be a "unrolled" vector of the
	%   partial derivatives of the neural network.
	%
	
	% Reshape nn_params back into the parameters Theta1 and Theta2, the weight matrices
	% for our 2 layer neural network
	Theta1 = reshape(nn_params(1:hidden_layer_size * (input_layer_size + 1)), ...
	                 hidden_layer_size, (input_layer_size + 1));
	
	Theta2 = reshape(nn_params((1 + (hidden_layer_size * (input_layer_size + 1))):end), ...
	                 num_labels, (hidden_layer_size + 1));
	
	% Setup some useful variables
	m=size(X,1);       
	[s2,s1p1]=size(Theta1); %25,400+1
	[s3,s2p1]= size(Theta2); %10 ,26
	% K is the Number of output classes
	K=s3;
	% You need to return the following variables correctly 
	J = 0;
	Theta1_grad = zeros(size(Theta1));% s_2 x s_1 =  25+1) x 5000
	Theta2_grad = zeros(size(Theta2));% s_3 X s_2 =  10    x (25+1)
	
	% ====================== YOUR CODE HERE ======================
	% Instructions: You should complete the code by working through the
	%               following parts.
	%
	% Part 1: Feedforward the neural network and return the cost in the
	%         variable J. After implementing Part 1, you can verify that your
	%         cost function computation is correct by verifying the cost
	%         computed in ex4.m
	%
	% Part 2: Implement the backpropagation algorithm to compute the gradients
	%         Theta1_grad and Theta2_grad. You should return the partial derivatives of
	%         the cost function with respect to Theta1 and Theta2 in Theta1_grad and
	%         Theta2_grad, respectively. After implementing Part 2, you can check
	%         that your implementation is correct by running checkNNGradients
	%
	%         Note: The vector y passed into the function is a vector of labels
	%               containing values from 1..K. You need to map this vector into a 
	%               binary vector of 1's and 0's to be used with the neural network
	%               cost function.
	%
	%         Hint: We recommend implementing backpropagation using a for-loop
	%               over the training examples if you are implementing it for the 
	%               first time.
	%
	% Part 3: Implement regularization with the cost function and gradients.
	%
	%         Hint: You can implement this around the code for
	%               backpropagation. That is, you can compute the gradients for
	%               the regularization separately and then add them to Theta1_grad
	%               and Theta2_grad from Part 2.
	%
	
	
	%solution mm
	% we feed forward = compute the activations of the layers
	
	% add the arbitrary feature 1 to the examples to form the input layer
	a1_mat=[ones(1,m); X']; %400+1 rows 5000 columns
	% in the first step we treat our input X (renamed a1_mat) as of ot was a classification problem with 25 classes
	z2_mat=Theta1*a1_mat;
	a2_mat=[ones(1,m); sigmoid(z2_mat)]; %25+1rows 5000 columns
	z3_mat=Theta2*a2_mat;
	a3_mat=[sigmoid(z3_mat)]; %10rows 5000 columns (since we do not use it for another iteration we do not have to add the constant feature
	
	% A perfect algorithm would produce an activation matrix a3_mat that
	% has weigth one for the correct class and zero otherwise (for all x^i in X)
	% we could construct such an optimal activation matrix from the
	% result vector y and then compare it to a3_mat
	%y_mat=zeros(k,m)
	%for k=1:K
	%	y_mat(k,:)=(y==k);
	%end
	% To determine the cost we penalize all diviations from this vector
	% instead of computing the mainly empty y_mat we only compute 
	% its colums one by one  
	J0 = 0; 
	for k=1:K
		y_mat_k=(y==k);% trasform to a vector of zeros and ones 
		h_k=a3_mat(k,:);
		cost_k= J = -1/m*(log(h_k)*y_mat_k+log(1-h_k)*(1-y_mat_k));
		J0=J0+cost_k;
	end
	% now we add the regularization term (ommitting the first colums)
	function s=square_without_first_column(T)
		nc=size(T,2);
		s=sum(sumsq(T(:,2:nc)));
	end
	reg=lambda/(2*m)*( square_without_first_column(Theta1) +square_without_first_column(Theta2));
	J=J0+reg;
	% use backpropagation to compute the gradient
	function y_mat=resultVec(y)
		y_mat=zeros(k,1);
		for k=1:K
			y_mat(k)=(y==k);
		endfor
	end
	
	DELTA1=zeros(s2,s1p1);
	DELTA2=zeros(s3,s2p1);
	for t =1:m
		y_mat=resultVec(y(t));
		a1=[1;X'(:,t)]; %(400+1,1) =(s1p1,1) 
		z2=Theta1*a1; % (25,401) x (401,1)  = (25,1) =(s2,1)
		a2=[1; sigmoid(z2)]; %(25+1,1)
		z3=Theta2*a2;
		a3=sigmoid(z3);
		delta3=a3-y_mat; % (10,1) = (s3,1)
		x2=(Theta2'* delta3);%( 25+1,10) *(10,1)=(25+1,1)
		x2=x2(2:end); %remove the first row (25,1)=(s2,1)
		delta2=x2.*sigmoidGradient(z2); %(25,1)=(s2,1)
	
		DELTA1=DELTA1+delta2*a1'; %=(25,1)*(1,401)=(25,401)=(s2,s1p1)
		DELTA2=DELTA2+delta3*a2'; %=(10,1)*(25+1,1)=(10,26)=(s3,sp2p1)
	end
	% The regularization should not affect the first column of Theta
	% We just remove it and then do not have to treat the first column
	% in the regularization differently
	function Th=set_first_column_zero(Th)
		Th(:,1)=0;
	end
	
	Theta1_grad = 1/m*(DELTA1+lambda*set_first_column_zero(Theta1));
	Theta2_grad = 1/m*(DELTA2+lambda*set_first_column_zero(Theta2));

% -------------------------------------------------------------

% =========================================================================

% Unroll gradients
	grad = [Theta1_grad(:) ; Theta2_grad(:)];

end
