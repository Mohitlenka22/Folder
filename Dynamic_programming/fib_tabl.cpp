#include <bits/stdc++.h>
using namespace std;

// tabulation
int main()
{
    int n;
    cin >> n;
    // vector<int> dp(n + 1, -1);
    // dp[0] = 0;
    // dp[1] = 1;
    // for (int i = 2; i <= n; i++)
    // {
    //     dp[i] = dp[i - 1] + dp[i - 2];
    // }
    // cout << dp[n];

    // space optimization
    int prev2 = 0;
    int prev = 1;
    for (int i = 2; i <= n; i++)
    {
        int curr_i = prev + prev2;
        prev2 = prev;
        prev = curr_i;
    }
    cout << prev;
    return 0;
}
// prev2  prev    i
//        prev2   prev  i