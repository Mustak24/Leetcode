// Last updated: 8/15/2026, 9:46:04 PM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var longestSubsequence = function(nums) {
6    const leftSum = [];
7    let left=0, max = 0, size=0, zeros = 0;
8    for(let i=0; i<nums.length; i++) {
9        if(nums[i] === 0) {
10            zeros += 1;
11            continue;
12        };
13
14        left ^= nums[i];
15        size++;
16        if(left) max = size;
17    }
18
19    if(zeros === nums.length) return 0;
20
21    return zeros + max
22};