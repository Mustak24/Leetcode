// Last updated: 9/5/2026, 9:47:05 AM
1/**
2 * @param {number[]} nums
3 * @param {number} k
4 * @return {number}
5 */
6var firstStableIndex = function(nums, k) {
7    const min = [];
8    min[nums.length-1] = nums[nums.length-1];
9    for(let i=nums.length-2; i>=0; i--) {
10        min[i] = Math.min(min[i+1], nums[i]);
11    }
12
13    let max = nums[0]
14    for(let i=0; i<nums.length; i++) {
15        max = Math.max(max, nums[i]);
16        const val = max - min[i];
17        
18        if(val <= k) return i;
19    }
20
21    return -1;
22};