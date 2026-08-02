// Last updated: 8/2/2026, 11:54:37 PM
1/**
2 * @param {number[]} nums
3 * @param {number} k
4 * @return {void} Do not return anything, modify nums in-place instead.
5 */
6var rotate = function(nums, k) {
7    const len = nums.length;
8    k = k % len;
9
10    const reverse = (l, r) => {
11        while(l < r) {
12            nums[l] = nums[l] ^ nums[r];
13            nums[r] = nums[l] ^ nums[r];
14            nums[l] = nums[l] ^ nums[r];
15            l++; r--;
16        }
17    }
18
19
20    reverse(0, len-k-1);
21    reverse(len-k, len-1);
22    reverse(0, len-1);
23};