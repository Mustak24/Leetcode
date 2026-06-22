// Last updated: 6/22/2026, 12:54:02 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l=0, r=nums.length-1;
    while(l < r) {
        const m = Math.floor((l + r) / 2);
        
        if(nums[m] < nums[r]) r = m;
        else l = m + 1;
    }

    return nums[r];

};