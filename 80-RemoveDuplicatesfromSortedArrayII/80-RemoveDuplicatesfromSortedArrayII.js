// Last updated: 8/2/2026, 11:39:57 PM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var removeDuplicates = function(nums) {
6    let k=2;
7
8    for(let i=2; i<nums.length; i++) {
9        if(
10            (nums[i] !== nums[k-1]) ||
11            (nums[i] === nums[k-1] && nums[k-1] !== nums[k-2])
12        ) nums[k++] = nums[i];
13    }
14
15    return k;
16};