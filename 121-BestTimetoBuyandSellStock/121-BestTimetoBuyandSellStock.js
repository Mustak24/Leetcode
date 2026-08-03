// Last updated: 8/3/2026, 4:36:46 PM
1/**
2 * @param {number[]} prices
3 * @return {number}
4 */
5var maxProfit = function(prices) {
6    let buyIndex = 0, maxProfit = 0;
7    for(let i=1; i<prices.length; i++) {
8        const profit = prices[i] - prices[buyIndex];
9        if(prices[buyIndex] > prices[i]) {
10            buyIndex = i;
11        }
12
13        if(maxProfit < profit) {
14            maxProfit = profit;
15        }
16    }
17
18    return maxProfit;
19};