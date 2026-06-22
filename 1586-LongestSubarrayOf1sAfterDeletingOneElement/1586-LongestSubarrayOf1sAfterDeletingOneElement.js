// Last updated: 6/22/2026, 12:52:22 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    const lenArr = nums.join('').split('0').map(arr => arr.length);
    
    if(lenArr.length === 1) return lenArr[0]-1;
    
    let max = 0;
    for(let i=1; i<lenArr.length; i++) {
        max = Math.max(max, lenArr[i] + lenArr[i-1]);
    }
    
    return max;
};