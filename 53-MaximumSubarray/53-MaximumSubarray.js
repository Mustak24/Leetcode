// Last updated: 8/16/2026, 9:39:18 PM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var maxSubArray = function(nums) {
6    let max = nums[0];
7    let currentSum = max;
8
9    for(let i=1; i<nums.length; i++) {
10        currentSum = Math.max(nums[i], currentSum + nums[i]);
11        max = Math.max(max, currentSum);
12    }
13
14    return max;
15};