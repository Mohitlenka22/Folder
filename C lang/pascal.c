#include <stdio.h>

int main()
{
	int rows,i,sp,j,x;
	scanf("%d",&rows);
	for(i=0;i<rows;i++)
	{
		for(sp=i;sp<=rows-i;sp++)
			printf(" ");
		for(j=0;j<=i;j++)
		{
			if(i==0 || j==0)
			 x=1;
			else 
				x=x*(i-j+1)/j;
		    printf("%4d",x);
		   
		}
		 printf("\n");
	}
	return 0;
}
