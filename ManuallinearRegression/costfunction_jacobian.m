function grad = costfunction_jacobian(theta0,theta1)
	d=data()
	xs=d(1,:)
	ys=d(2,:)
	m=length(xs)
        d_theta0=1
	d_theat1=1/m*sum((theta0+theta1*xs-ys)*xs')
	grad=[d_theta0;d_theat1]
endfunction

	
