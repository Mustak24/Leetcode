// Last updated: 8/3/2026, 1:12:01 PM
1/**
2 * @param {number[]} stoneValue
3 * @return {string}
4 */
5var stoneGameIII = function(stoneValue) {
6    const len = stoneValue.length;
7    const cache = new Map();
8
9    function fn(l=0) {
10
11        if(cache.has(l)) return cache.get(l);
12
13        let s1, s2, s3, max=0;
14        if(l < len) {
15            s1 = stoneValue[l] - fn(l+1);
16            max = s1
17        }
18        
19        if(l < len-1) {
20            s2 = (stoneValue[l] + stoneValue[l+1]) - fn(l+2);
21            max = Math.max(max, s2)
22        }
23
24        if(l < len-2) {
25            s3 = (stoneValue[l] + stoneValue[l+1] + stoneValue[l+2]) - fn(l+3);
26            max = Math.max(max, s3)
27        }
28
29        // console.log({s1, s2, s3})
30        cache.set(l, max);
31        return max;
32    }
33
34    const result = fn();
35    // console.log(result)
36    if(result < 0) return 'Bob';
37    if(result === 0) return 'Tie';
38    return 'Alice';
39};