// Last updated: 6/22/2026, 12:49:37 PM
/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var numberOfWays = function(n, x) {
    const MOD = 1e9 + 7;

    const powers = [];
    let num = 1;
    while(true) {
        const p = Math.pow(num, x);
        if(p > n) break;
    
        powers.push(p);
        num++;
    }

    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;

    for (let p of powers) {
        for (let sum = n; sum >= p; sum--) {
            dp[sum] = (dp[sum] + dp[sum - p]) % MOD;
        }
    }

    return dp[n];
};