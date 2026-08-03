// Last updated: 8/3/2026, 9:29:56 PM
1/**
2 * @param {number[]} prices
3 * @return {number}
4 */
5var maxProfit = function(prices) {
6    let profit = 0, min = prices[0], max = prices[0];
7
8    for(let price of prices) {
9        if(price < max) {
10            profit += (max - min);
11            min = price;
12            max = price;
13        }
14
15        if(price > max) {
16            max = price;
17        }
18    }
19
20    profit += (max - min)
21
22    return profit;
23};