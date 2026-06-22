// Last updated: 6/22/2026, 12:54:24 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    {
        let max = nums[0];
        for(let num of nums) if(max < num) max = num;
        if(max <= 0) return max; 
    }

    let max = 0;
    let sum = 0;
    for(let num of nums) {
        sum += num;
        if(max < sum) max = sum;
        if(sum < 0) sum = 0;
    }
    return max;
};