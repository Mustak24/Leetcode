// Last updated: 8/2/2026, 9:46:35 AM
1/**
2 * @param {number[]} piles
3 * @return {boolean}
4 */
5var stoneGame = function(piles) {
6    const cache = new Map();
7
8    const ans = (l=0, r=piles.length-1) => {
9        if(l === r) return piles[l];
10        
11        const key = `${l}-${r}`;
12        if(cache.has(key)) return cache.get(key);
13
14        const left = piles[l] - ans(l+1, r);
15        const right = piles[r] - ans(l, r-1);
16        
17        const max = Math.max(left, right);
18        cache.set(key, max);
19        return max;
20    }
21
22    return ans() > 0;
23};