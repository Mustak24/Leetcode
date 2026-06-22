// Last updated: 6/22/2026, 12:55:32 PM
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let nums = nums1.concat(nums2)
    nums.sort((a, b) => a - b)
    let numsLen = nums.length;
    if (numsLen % 2 == 0) {
        let sum = nums[numsLen / 2] + nums[numsLen / 2 - 1];
        return sum / 2;
    } else {
        return nums[Math.floor(numsLen / 2)];
    }
};