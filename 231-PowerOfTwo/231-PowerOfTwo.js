// Last updated: 6/22/2026, 12:53:59 PM
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n <= 0) return false;
    return (n & (n - 1)) === 0
};