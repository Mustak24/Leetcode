// Last updated: 10/14/2026, 12:19:08 AM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var maxAlternatingSum = function(nums) {
6    const SIZE = nums.length;
7    const HALF_SIZE = Math.floor(nums.length / 2)
8    nums.sort((a, b) => Math.abs(b) - Math.abs(a));
9
10    let sum = 0;
11    for(let i=0; i<HALF_SIZE; i++) {
12        sum += (nums[i] * nums[i] - nums[SIZE-i-1] * nums[SIZE-i-1]);
13    }
14
15    if(SIZE % 2) sum += nums[HALF_SIZE] * nums[HALF_SIZE];
16
17    return sum;
18};