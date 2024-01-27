int factorial(int n)
{
	int fact=1,i=1;
	for(i;i<=n;i++)
		fact*=i;
	return fact;
}

int factorial_rec(int n)
{
	if(n==0)
		return 1;
	else return n*factorial_rec(n-1);
}

int prime(int n)
{
	int i=2;
	for(i;i*i<=n;i++)
	{
		if(n%i==0)
			return 0; //0 - false
	}
	return 1; //1 - true
}
