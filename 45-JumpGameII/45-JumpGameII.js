// Last updated: 8/3/2026, 10:16:33 PM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var jump = function(nums) {
6    const cache = new Map();
7
8    function fn(index=0) {
9        if(index >= nums.length-1) return 0;
10        if(nums[index] === 0) return Infinity;
11
12        if(cache.has(index)) return cache.get(index);
13
14        let min = Infinity;
15        for(let i=1; i<=nums[index]; i++) {
16            const steps = 1 + fn(index + i);
17            min = Math.min(min, steps);
18        }
19
20        cache.set(index, min);
21        return min;
22    }
23
24    return fn();
25};