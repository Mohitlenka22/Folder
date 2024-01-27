#include <bits/stdc++.h>
using namespace std;

int max_subarr(int [],int);
int cir_sum(int [] , int );

int main()
{
	int arr[]={8,-4,3,-5,4};
	int n = sizeof(arr)/sizeof(arr[0]);
	int ans = cir_sum(arr,n);
	cout << ans;
	
    return 0;
}

int max_subarr(int arr[],int n) //kadane alogrithm (based on maximum sub array ending with current element).
{
	int res = arr[0];
	int maxending = arr[0];
	int i;
	for (i=1;i<n;i++)
	{
		maxending = max(maxending+arr[i],arr[i]);
		res = max(res,maxending);
	}
	return res;
}

int cir_sum(int arr[] , int n)
{
	int max_normal = max_subarr(arr,n);
	if (max_normal < 0)
		return max_normal;
	int sum=0;
	int i;
	for(i=0;i<n;i++)
	{
		sum+=arr[i];
		arr[i]=-arr[i];
	}
	int	max_cir= sum+max_subarr(arr,n);
	return max(max_normal,max_cir);
}











