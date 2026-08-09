// Last updated: 8/9/2026, 10:59:08 AM
1/**
2 * @param {number[]} piles
3 * @return {number}
4 */
5var stoneGameII = function(piles) {
6    const cache = new Map();
7    
8    function fn(index=0, m=1) {
9        if(index >= piles.length) return 0;
10        
11        const key = `${index}-${m}`;
12        if(cache.has(key)) return cache.get(key);
13
14        const range = Math.min(index + 2 * m, piles.length);
15        let max, pilesSum = 0;
16        for(let i=index; i<range; i++) {
17            pilesSum += piles[i]
18            const result = pilesSum - fn(i+1, Math.max(m, i-index+1));
19
20            max = Math.max(max ?? result, result)
21        }
22
23        cache.set(key, max);
24        return max;
25    }
26
27    const scoreDiff = fn();
28    const total = piles.reduce((a, b) => a + b);
29    const baseScore = (total - Math.abs(scoreDiff)) / 2;
30
31    if(scoreDiff < 0) return baseScore;
32    return baseScore + scoreDiff;
33};