// Last updated: 6/22/2026, 12:51:49 PM
/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
   let diff;
   let arr=[]
    for(let i=0; i<nums.length;i++)
    {
        if(target==nums[i])
        {
             diff = Math.abs(i-start)
             arr.push(diff)
            
        }
    }
    return Math.min(...arr)
    
};