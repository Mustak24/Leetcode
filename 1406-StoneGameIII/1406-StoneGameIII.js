// Last updated: 8/3/2026, 1:14:10 PM
1/**
2 * @param {number[]} stoneValue
3 * @return {string}
4 */
5var stoneGameIII = function(stoneValue) {
6    const len = stoneValue.length;
7    const cache = new Map();
8
9    function fn(l=0) {
10        if(cache.has(l)) return cache.get(l);
11
12        let max=0;
13        if(l < len) {
14            max = stoneValue[l] - fn(l+1);
15        }
16        
17        if(l < len-1) {
18            max = Math.max(max, (stoneValue[l] + stoneValue[l+1]) - fn(l+2))
19        }
20
21        if(l < len-2) {
22            max = Math.max(max, (stoneValue[l] + stoneValue[l+1] + stoneValue[l+2]) - fn(l+3))
23        }
24
25        cache.set(l, max);
26        return max;
27    }
28
29    const result = fn();
30
31    if(result < 0) return 'Bob';
32    if(result === 0) return 'Tie';
33    return 'Alice';
34};