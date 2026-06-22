// Last updated: 6/22/2026, 12:55:29 PM
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        let diff = target-nums[i]
        let hasDiff = nums.includes(diff)
        if(hasDiff && i != nums.indexOf(diff)){
            return [i, nums.indexOf(diff)]
        }
    }
};