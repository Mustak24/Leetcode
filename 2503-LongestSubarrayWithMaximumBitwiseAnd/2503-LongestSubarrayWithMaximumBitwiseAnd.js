// Last updated: 6/22/2026, 12:50:58 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    const max = Math.max(...nums);

    let count = 0;
    let temp = 0;
    for(let num of nums) {
        if(num === max) {
            temp++;
        } else {
            count = Math.max(temp, count);
            temp = 0;
        }
    }

    return Math.max(temp, count);
};