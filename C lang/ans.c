//#include <stdio.h>
//#include <math.h>
//
//int main()
//{
//
//    char ch;
//    scanf("%c",&ch);
//    int ASCII;
//    ASCII=ch;
//    if (ASCII>=65&&ASCII<=90 || ASCII>=97&&ASCII<=122)
//    {
//    	if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'||ch=='A'||ch=='E'||ch=='I'||ch=='O'||ch=='U')
//    	{
//    		printf("\'%c\' is a Vowel",ch);
//		}
//		else printf("\'%c\' is a Consonant",ch);
//	}
//	else if (ASCII>=48&&ASCII<=57)
//	{
//		printf("\'%c\' is a digit",ch);
//	}
//	else printf("\'%c\' is a special Character",ch);
//    	
//	return 0;
//}

#include <stdio.h>

int main()
{
  int n;
  scanf("%d",&n);
  int rem = n%100;
  if (rem>9)
    printf("%d",rem);
  else
    printf("0%d",rem);
}
