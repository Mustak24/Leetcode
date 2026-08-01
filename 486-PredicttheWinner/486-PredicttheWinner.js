// Last updated: 8/1/2026, 10:39:46 PM
1/**
2 * @param {number[]} nums
3 * @return {boolean}
4 */
5var predictTheWinner = function(nums) {
6    const cache = new Map();
7
8    function maxDiff(l=0, r=nums.length-1) {
9        if(l === r) return nums[l];
10        
11        const key = `${l}-${r}`;
12        if(cache.has(key)) return cache.get(key);
13
14        const left = nums[l] - maxDiff(l+1, r);
15        const right = nums[r] - maxDiff(l, r-1);
16        
17        const val = Math.max(left, right);
18        cache.set(key, val);
19
20        return val;
21    }
22    
23    return maxDiff() >= 0; 
24};