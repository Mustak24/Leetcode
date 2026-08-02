// Last updated: 8/2/2026, 11:27:54 PM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var removeDuplicates = function(nums) {
6    let k=1;
7
8    for(let i=1; i<nums.length; i++) {
9        if(nums[i-1] !== nums[i]) {
10            nums[k++] = nums[i];
11        }
12    }
13
14    return k;
15};