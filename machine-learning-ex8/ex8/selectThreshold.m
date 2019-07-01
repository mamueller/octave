function [bestEpsilon bestF1] = selectThreshold(yval, pval)
%SELECTTHRESHOLD Find the best threshold (epsilon) to use for selecting
%outliers
%   [bestEpsilon bestF1] = SELECTTHRESHOLD(yval, pval) finds the best
%   threshold to use for selecting outliers based on the results from a
%   validation set (pval) and the ground truth (yval).
%

bestEpsilon = 0;
bestF1 = 0;
F1 = 0;

stepsize = (max(pval) - min(pval)) / 1000;
for epsilon = min(pval):stepsize:max(pval)
    
    % ====================== YOUR CODE HERE ======================
    % Instructions: Compute the F1 score of choosing epsilon as the
    %               threshold and place the value in F1. The code at the
    %               end of the loop will compare the F1 score for this
    %               choice of epsilon and set it to be the best epsilon if
    %               it is better than the current choice of epsilon.
    %               
    % Note: You can use predictions = (pval < epsilon) to get a binary vector
    %       of 0's and 1's of the outlier predictions
    
    % compute the prediction vector yp based on the concrete epsilon
    
    %yval = 1 for an anomaly
    % so yp =!  if pval <epsilon 
    yp=pval<epsilon;
    
    % yp(i) is a true positive is  yval(i)=! one and yp(i)=1
    tp=sum( yp==1 & yval ==1);
    
    % yp(i) is a false positive if yp(i)=1 but yval ==0
    fp=sum (yp==1 & yval ==0);

    % yp(i) is a false negative if yp(i)=0 but yval ==1
    fn=sum( yp==0 & yval ==1);

    %orecision
    prec= tp/(tp+fp);
    
    %recall 
    rec =tp/(tp+fn);

    %F1
    F1=2*prec*rec/(prec+rec);

    % =============================================================

    if F1 > bestF1
       bestF1 = F1;
       bestEpsilon = epsilon;
    end
end

end
