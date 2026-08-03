// Last updated: 8/3/2026, 9:30:58 PM
1/**
2 * @param {number[]} prices
3 * @return {number}
4 */
5var maxProfit = function(prices) {
6    let profit = 0;
7    let min = prices[0], max = prices[0];
8
9    for(let price of prices) {
10        if(price < max) {
11            profit += (max - min);
12            min = price;
13            max = price;
14        } else if(price > max) {
15            max = price;
16        }
17    }
18
19    profit += (max - min)
20
21    return profit;
22};