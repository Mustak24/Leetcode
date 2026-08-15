// Last updated: 8/15/2026, 9:43:57 PM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var longestSubsequence = function(nums) {
6    const leftSum = [];
7    let max = 0, zeros = 0;
8    for(let i=0; i<nums.length; i++) {
9        if(nums[i] === 0) {
10            zeros += 1;
11            continue;
12        };
13
14        leftSum.push(nums[i] ^ (leftSum[leftSum.length-1] ?? 0));
15        if(leftSum[leftSum.length-1]) max = leftSum.length;
16    }
17
18    if(zeros === nums.length) return 0;
19
20    return zeros + max
21};