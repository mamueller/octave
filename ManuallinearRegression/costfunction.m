function cost = costfunction(theta0,theta1)
	d=data();
	xs=d(1,:);
	ys=d(2,:);
	mys=h(theta0,theta1,xs);
	diff=ys-mys;
	cost = diff*diff';
endfunction
