// Last updated: 6/22/2026, 12:52:18 PM
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    const range = high - low;
    return Math.floor(range / 2) + Math.max(low % 2, high % 2);
};