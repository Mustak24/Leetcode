// Last updated: 6/22/2026, 12:52:04 PM
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let isFoundRotation = false;

    for(let i=0; i<nums.length-1; i++) {
        if(nums[i] > nums[i+1]) {
            if(isFoundRotation) return false;
            isFoundRotation = true;
        }
    }

    if(isFoundRotation) {
        return nums[0] >= nums[nums.length-1];
    }

    return nums[0] <= nums[nums.length-1];
};