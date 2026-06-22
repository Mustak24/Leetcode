// Last updated: 6/22/2026, 12:49:00 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    return nums.reduce((a, b) => a + (b % 3 ? 1 : 0), 0);
};