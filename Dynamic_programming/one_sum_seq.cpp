// you need to print any one sub-sequences with given sum
/*
    To print anyone sequence follow steps
    --> if condition is satisfied return true
    --> if condition is not satisfied return false

    and in function calls
    --> if function calls returns true return true
    --> if none of function calls return false

*/
#include <bits/stdc++.h>
using namespace std;

bool printF(int ind, vector<int> &ds, int s, int arr[], int n, int sum)
{
    if (ind == n)
    {
        if (s == sum)
        {
            for (auto it : ds)
                cout << it << " ";
            return true;
        }
        return false;
    }

    // take or pick an element
    ds.push_back(arr[ind]);
    s += arr[ind];
    if (printF(ind + 1, ds, s, arr, n, sum) == true)
        return true;
    // non-take or non-pick an element
    ds.pop_back();
    s -= arr[ind];
    if (printF(ind + 1, ds, s, arr, n, sum) == true)
        return true;

    return false;
}

int main()
{
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++)
        cin >> arr[i];
    vector<int> ds;
    int sum;
    cin >> sum;
    printF(0, ds, 0, arr, n, sum);

    return 0;
}
