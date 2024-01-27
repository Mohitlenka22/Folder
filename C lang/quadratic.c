#include <stdio.h>
#include <math.h>

int main()
{
	float a,b,c;
	scanf("%f%f%f3",&a,&b,&c);
	float D=pow(b,2)-(4*a*c);
	if(D>0)
		printf("The roots are real and distinct root1=%.2f and root2=%.2f",(-b-sqrt(D))/(2*a),(-b+sqrt(D))/(2*a));
	else if(D==0)
		printf("The roots are equal and root1=root2=%.2f",-b/(2*a));
	else {
	  float real = -b/(2*a);
	  float img = sqrt(4*a*c-pow(b,2))/(2*a);
	  printf("The roots are imaginary  and root1=%.2f+%.2fi , root2=%.2f-%.2fi",real,img,real,img);
	}
	
	
	return 0;
}
