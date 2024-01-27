#include <bits/stdc++.h>
using namespace std;

int maj(int [],int);

int main()
{
	int arr[] = {2,3,4,44,4,5,4,4,4,4,4}; //element which appears morethan n/2 times =>majority element.
	int n=sizeof(arr)/sizeof(arr[0]);
	int ans  = maj(arr,n);
	cout << ans;

}

int maj(int arr[],int n)
{
//	int i,j;
//	for (i=0;i<n;i++)
//	{
//		int count =1;
//		for (j=i+1;j<n;j++)
//		{
//			if (arr[i] == arr[j])
//				count++;
//		}
//		if (count > n/2)
//			return i;
//	}
//	return -1;
	
	int res = arr[0];
	int count=1;
	int i;
	for (i=1;i<n;i++)
	{
		if(arr[i]==arr[res])
			count++;
		else
			count--;
		if (count==0)
		{
			res = i;
			count=1;
		}
	}	
	count = 0;
	for (i=0;i<n;i++)
	{
		if(arr[res]==arr[i])
			count++;
	}
	if (count <=n/2)
			return -1;
	else 
		return res;
}















