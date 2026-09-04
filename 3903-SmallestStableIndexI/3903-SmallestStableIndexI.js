// Last updated: 9/4/2026, 9:45:16 AM
1/**
2 * @param {number[]} nums
3 * @param {number} k
4 * @return {number}
5 */
6var firstStableIndex = function(nums, k) {
7    const max = [nums[0]];
8    for(let i=1; i<nums.length; i++) {
9        max[i] = Math.max(max[i-1], nums[i]);
10    }
11
12    const min = [];
13    min[nums.length-1] = nums[nums.length-1];
14    for(let i=nums.length-2; i>=0; i--) {
15        min[i] = Math.min(min[i+1], nums[i]);
16    }
17
18    for(let i=0; i<nums.length; i++) {
19        if((max[i] - min[i]) <= k) return i;
20    }
21
22    return -1;
23};