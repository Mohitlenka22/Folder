// you need to print all sub-sequences with given sum
#include <bits/stdc++.h>
using namespace std;

void printF(int ind, vector<int> &ds, int s, int arr[], int n, int sum)
{
    if (ind == n)
    {
        if (s == sum)
        {
            for (auto it : ds)
                cout << it << " ";
            cout << endl;
        }
        return;
    }

    // take or pick a element
    ds.push_back(arr[ind]);
    s += arr[ind];
    printF(ind + 1, ds, s, arr, n, sum);
    // non-take or non-pick an element
    ds.pop_back();
    s -= arr[ind];
    printF(ind + 1, ds, s, arr, n, sum);
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