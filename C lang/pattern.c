#include <stdio.h>

int main()
{
	int n,i,j,sp;
	scanf("%d",&n);
	for(i=n;i>=1;i--)
	{
		for(sp=i;sp<n;sp++)
			printf(" ");
		for(j=i;j>=1;j--)
			printf("%d ",j);
		printf("\n");
	}
	return 0;
}
