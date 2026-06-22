// Last updated: 6/22/2026, 12:51:15 PM
/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    return (start^goal).toString(2).split('').filter(e=>e!='0').length
};