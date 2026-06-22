// Last updated: 6/22/2026, 12:48:55 PM
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    for(let i=0; i<k; i++){
        let min = 0;
        for(let j=1; j<nums.length; j++){
            if(nums[j] < nums[min]) min = j;
        }
        nums[min] *= multiplier;
    }
    return nums;
};