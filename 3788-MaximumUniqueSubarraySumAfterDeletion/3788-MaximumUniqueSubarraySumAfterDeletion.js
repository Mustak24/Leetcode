// Last updated: 6/22/2026, 12:48:32 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    nums = Array.from(new Set(nums));
    
    if(nums.length === 0) return nums[0];

    const max = Math.max(...nums);
    if(max < 1) return max;

    let sum = 0;
    for(let i=0; i<nums.length; i++) if(nums[i] > 0) sum += nums[i];
    return sum;
}; 