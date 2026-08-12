// Last updated: 8/12/2026, 1:43:34 PM
1/**
2 * @param {number[]} nums
3 * @param {number} k
4 * @return {number}
5 */
6var maxSubarrayLength = function(nums, k) {
7    const windowMap = new Map();
8    let size = 0;
9
10    const add = (n) => {
11        windowMap.set(n, (windowMap.get(n) ?? 0) + 1);
12        size += 1;
13    }
14
15    const remove = (n) => {
16        if(!windowMap.has(n)) return;
17        windowMap.set(n, windowMap.get(n) - 1);
18        size -= 1;
19    }
20
21    let max = size;
22    for(let i=0; i<nums.length; i++) {
23        add(nums[i]);
24        while(windowMap.get(nums[i]) > k) {
25            remove(nums[i - (size-1)]);
26        }
27        max = Math.max(max, size);
28    }
29
30    return max;
31};