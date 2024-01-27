#include <bits/stdc++.h>
using namespace std;

//memoization
int f(int n, vector<int> &dp)
{
    if (dp[n] == -1)
    {
        if (n <= 1)
            return n;
        else
            return dp[n] = f(n - 1, dp) + f(n - 2, dp);
    }
    return dp[n];
}

int main()
{
    int n;
    cin >> n;
    vector<int> dp(n + 1, -1);
    cout << f(n, dp);

    return 0;
}