// Last updated: 6/22/2026, 12:49:32 PM
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    const map = Array.from({length: nums.length-2}, (_, i) => 1);
    map.push(2);

    for(let num of nums) {
        if(!map[num - 1]) return false;
        map[num - 1] -= 1;
    }

    return map.every(e => e === 0);
};