// Last updated: 8/15/2026, 9:42:27 PM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var longestSubsequence = function(nums) {
6    const leftSum = [];
7    let lmax = 0, zeros = 0;
8    for(let i=0; i<nums.length; i++) {
9        if(nums[i] === 0) {
10            zeros += 1;
11            continue;
12        };
13
14        leftSum.push(nums[i] ^ (leftSum[leftSum.length-1] ?? 0));
15        if(leftSum[leftSum.length-1]) lmax = leftSum.length;
16    }
17
18    nums = nums.reverse();
19    let rightSum = [];
20    let rmax = 0;
21    for(let i=0; i<nums.length; i++) {
22        if(nums[i] === 0) continue;
23
24        rightSum.push(nums[i] ^ (rightSum[rightSum.length-1] ?? 0));
25        if(rightSum[rightSum.length-1]) rmax = rightSum.length;
26    }
27
28    if(zeros === nums.length) return 0;
29
30    return zeros + Math.max(lmax, rmax)
31};