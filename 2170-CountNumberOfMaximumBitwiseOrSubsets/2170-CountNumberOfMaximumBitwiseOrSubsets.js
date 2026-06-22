// Last updated: 6/22/2026, 12:51:29 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
    let subset = [];
    for(let num of nums) {
        subset = [...subset, ...subset.map(e => [...e, num]), [num]];
    }

    const obj = {};
    let max = 0;
    for(let set of subset) {
        let or = set.reduce((a, b) => a | b, 0);
        max = Math.max(or, max);
        if(obj[or]) obj[or].push(set);
        else obj[or] = [set]
    }

    return obj[max]?.length ?? 0

};