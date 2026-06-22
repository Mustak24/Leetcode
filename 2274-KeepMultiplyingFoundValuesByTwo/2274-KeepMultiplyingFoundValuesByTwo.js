// Last updated: 6/22/2026, 12:51:13 PM
/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    const set = new Set(nums);
    
    while(set.has(original)) original <<= 1;

    return original;
};