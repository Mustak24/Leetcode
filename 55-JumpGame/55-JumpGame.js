// Last updated: 8/3/2026, 9:46:38 PM
1/**
2 * @param {number[]} nums
3 * @return {boolean}
4 */
5var canJump = function(nums) {
6    let maxIndex = 0;
7
8    for(let i=0; i<nums.length; i++) {
9        if(maxIndex < i) return false;
10        maxIndex = Math.max(maxIndex, i + nums[i]);
11    }
12
13    return true;
14};