// Last updated: 8/4/2026, 11:10:48 AM
1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var findMissingElements = function(nums) {
6    let min = max = nums[0];
7    for(let num of nums) {
8        min = Math.min(min, num);
9        max = Math.max(max, num);
10    }
11
12    const set = new Set(nums);
13    const ans = [];
14    for(let i=min; i<=max; i++) {
15        if(!set.has(i)) ans.push(i);
16    }
17
18    return ans;
19};