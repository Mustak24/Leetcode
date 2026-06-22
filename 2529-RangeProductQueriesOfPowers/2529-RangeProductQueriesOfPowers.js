// Last updated: 6/22/2026, 12:50:54 PM
/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function(n, queries) {
    const MAX = 1_000_000_007;

    const powers = [];
    let temp = 0;
    while(n) {
        if((n % 2) === 1) powers.push(temp);
        n = Math.floor(n / 2);
        temp++;
    }

    const sumArr = [powers[0]];
    for(let i=1; i<powers.length; i++) sumArr.push(sumArr.at(-1) + powers[i]);

    const ans = [];
    for(let [l, r] of queries) {
        const power = sumArr[r] - (l > 0 ? sumArr[l-1] : 0);
        const temp = Math.pow(2, power) % MAX;
        ans.push(temp)
    }

    return ans;
};