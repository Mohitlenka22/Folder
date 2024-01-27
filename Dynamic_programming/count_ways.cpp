/*
    To count ways
    f(ind)
    {
        if base_case is true
            return 1;
        left_call = function_call();
        right_call = function_call();

        return left_call + right_call;
    }
*/

// you need to print all sub-sequences with given sum
#include <bits/stdc++.h>
using namespace std;

int printF(int ind, int s, int arr[], int n, int sum)
{
    if (ind == n)
    {
        if (s == sum)
        {
            return 1;
        }
        return 0;
    }

    // take or pick a element
    s += arr[ind];
    int left = printF(ind + 1, s, arr, n, sum);
    // non-take or non-pick an element
    s -= arr[ind];
    int right = printF(ind + 1, s, arr, n, sum);

    return left + right;
}

int main()
{
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++)
        cin >> arr[i];
    int sum;
    cin >> sum;
    cout << printF(0, 0, arr, n, sum);

    return 0;
}