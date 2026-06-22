// Last updated: 6/22/2026, 12:49:20 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let ans = 1;
    let maxInc = 1;
    let maxDec = 1;
    
    for(let i=0; i<nums.length-1; i++){
        if(ans < maxInc) ans = maxInc;
        else if(ans < maxDec) ans = maxDec;

        if(nums[i] < nums[i+1]) {
            maxInc++;
            maxDec = 1;
        } else if(nums[i] > nums[i+1]){
            maxDec++;
            maxInc = 1;
        } else {
            maxInc = 1;
            maxDec = 1;
        }
    }

    return Math.max(ans, maxInc, maxDec); 
};