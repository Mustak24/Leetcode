// Last updated: 6/22/2026, 12:52:06 PM
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let max = 0, sum = 0;
    for(let num of gain) {
        sum += num;
        max = Math.max(max, sum);
    }
    return max;
};