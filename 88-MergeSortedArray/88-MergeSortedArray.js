// Last updated: 8/2/2026, 10:59:28 PM
1/**
2 * @param {number[]} nums1
3 * @param {number} m
4 * @param {number[]} nums2
5 * @param {number} n
6 * @return {void} Do not return anything, modify nums1 in-place instead.
7 */
8var merge = function(nums1, m, nums2, n) {
9    const len = m + n;
10
11    const reverse = (l, r) => {
12        while(l < r) {
13            nums1[l] = nums1[l] ^ nums1[r];
14            nums1[r] = nums1[l] ^ nums1[r];
15            nums1[l] = nums1[l] ^ nums1[r];
16            l++; r--;
17        }
18    }
19
20    reverse(0, m-1);
21    reverse(0, len-1);
22
23    let i=len-m, j=0, k=0;
24    while(i < len && j < n) {
25        if(nums1[i] < nums2[j]) {
26            nums1[k++] = nums1[i++];
27        } else {
28            nums1[k++] = nums2[j++];
29        }
30    }
31
32    while(i < len) nums1[k++] = nums1[i++];
33    while(j < n) nums1[k++] = nums2[j++];
34};