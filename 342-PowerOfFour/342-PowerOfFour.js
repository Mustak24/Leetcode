// Last updated: 6/22/2026, 12:53:51 PM
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n <= 0) return false;
    if(n === 1) return true;

    let is4Power = true;
    while(true) {
        const rem = n % 2;
        n = Math.floor(n / 2);
        
        if(n === 0) break;

        if(rem === 1) return false;
        is4Power = !is4Power;
    }

    return is4Power
};