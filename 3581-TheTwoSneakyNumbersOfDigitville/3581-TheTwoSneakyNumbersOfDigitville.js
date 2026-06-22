// Last updated: 6/22/2026, 12:48:45 PM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    const set = new Set();
    const ans = [];
    
    for(let num of nums)
        set.has(num) ? ans.push(num) : set.add(num);


    return ans;
};