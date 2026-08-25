// Last updated: 8/25/2026, 12:08:56 PM
1/**
2 * @param {number[]} nums
3 * @param {number} k
4 * @return {number}
5 */
6var missingMultiple = function(nums, k) {
7    const set = new Set(nums);
8
9    for(let i=1; i<=nums.length; i++) {
10        const num = i * k;
11        if(!set.has(num)) return num;
12    }
13
14    return k * (nums.length + 1);
15};