// Last updated: 6/22/2026, 12:51:46 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a, b) => a - b);

    let left = 0, right = nums.length-1;
    let max = nums[left] + nums[right];

    while(left < right) {
        max = Math.max(max, nums[left] + nums[right]);
        left++; right--;
    }

    return max;
};