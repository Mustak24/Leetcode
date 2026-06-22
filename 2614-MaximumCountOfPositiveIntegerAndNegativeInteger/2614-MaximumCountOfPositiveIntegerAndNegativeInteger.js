// Last updated: 6/22/2026, 12:50:39 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let pos = 0, neg = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] < 0) neg++;
        if(nums[i] > 0) pos++;
    }
    return Math.max(pos, neg);
};