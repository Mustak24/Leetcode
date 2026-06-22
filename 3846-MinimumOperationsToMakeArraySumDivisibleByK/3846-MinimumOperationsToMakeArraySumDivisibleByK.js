// Last updated: 6/22/2026, 12:48:30 PM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    return nums.reduce((a, b) => a + b) % k;
};