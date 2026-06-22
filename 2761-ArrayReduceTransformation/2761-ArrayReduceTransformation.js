// Last updated: 6/22/2026, 12:50:07 PM
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    nums.forEach((e)=>{
        init = fn(init,e);
    })
    return init;
};