// Last updated: 6/22/2026, 12:53:52 PM
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n <= 0) return false;

    let l=0, r=n;
    while(l <= r) {
        const m = Math.floor((l + r)/2);
        const p = Math.pow(3, m)

        if(p === n) return true;

        if(p < n) l = m + 1;
        else r = m - 1;
    }

    return false;
};