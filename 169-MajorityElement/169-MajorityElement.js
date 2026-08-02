// Last updated: 8/2/2026, 11:50:11 PM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var majorityElement = function(nums) {
6    let mi = 0, mf = 0;
7    for(let i=0; i<nums.length; i++) {
8        if(mf === 0) mi = i;
9
10        if(nums[i] === nums[mi]) mf++;
11        else mf--;
12    }
13
14    return nums[mi];
15};