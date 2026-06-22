// Last updated: 6/22/2026, 12:51:06 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let totalSum =nums.reduce((a,b)=>a+b);

    let ans = 0; 
    let temp = nums[0];
    for(let i=1; i<nums.length; i++){
        if(temp >= totalSum-temp) ans++;
        temp += nums[i];
    }
    
    return ans;
};