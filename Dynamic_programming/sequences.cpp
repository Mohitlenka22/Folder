#include <bits/stdc++.h>
using namespace std;

void printS(int ind, vector<int> &ds, int n, int arr[])
{
    if (ind == n)
    {
        for (auto it : ds)
            cout << it << " ";
        cout << endl;
        return;
    }
    // take or pick a element
    ds.push_back(arr[ind]);
    printS(ind + 1, ds, n, arr);
    // non-take or non-pick a element
    ds.pop_back();
    printS(ind + 1, ds, n, arr);
}

int main()
{
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++)
        cin >> arr[i];
    vector<int> ds;
    printS(0, ds, n, arr);

    return 0;
}