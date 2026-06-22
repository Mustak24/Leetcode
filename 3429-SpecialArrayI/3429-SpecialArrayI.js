// Last updated: 6/22/2026, 12:49:16 PM
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    for(let i=0; i<nums.length-1; i++){
        if(!((nums[i]^nums[i+1])%2)) return false;
    }
    return true;
};