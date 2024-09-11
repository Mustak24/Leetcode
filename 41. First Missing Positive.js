/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if(!nums.includes(1)) return 1
    nums = nums.sort((a,b)=>a-b);
    for(let i=0; i<nums.length-1; i++){
        if(nums[i+1]-nums[i] > 1 && nums[i]>0)
            return nums[i]+1;
    }
    return nums[nums.length-1] + 1
};