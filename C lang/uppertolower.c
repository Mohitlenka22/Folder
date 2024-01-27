#include <stdio.h>

int main()
{
	int n;
	scanf("%d",&n);
	int rem = n%100;
//	printf("%d",rem);1
	if(rem>9)
		printf("The last two %d",rem);
	else if (rem>=1 && rem<=9)
		printf("The last two 0%d",rem);
	else
		printf("The last two are 00");
}
