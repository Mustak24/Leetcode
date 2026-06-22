// Last updated: 6/22/2026, 12:54:52 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let info = [nums[0], 1]
    for(let i=0; i<nums.length; i++){
        if(nums[i] != info[0]){
            nums[info[1]] = nums[i]
            info[0] = nums[i]
            info[1] += 1
        }
    }
    return info[1]
};