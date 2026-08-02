// Last updated: 8/2/2026, 11:23:21 PM
1/**
2 * @param {number[]} nums
3 * @param {number} val
4 * @return {number}
5 */
6var removeElement = function(nums, val) {
7    let k = 0;
8    
9    for(let num of nums) {
10        if(num !== val) {
11            nums[k++] = num;
12        }
13    }
14
15    return k;
16};