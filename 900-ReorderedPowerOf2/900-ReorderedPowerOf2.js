// Last updated: 6/22/2026, 12:53:22 PM
/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    if(n == 0) return false;

    const target = n.toString().split('').sort().join('');

    let pow = 1;
    while(pow.toString().length < target.length) pow *= 2;

    while(pow.toString().length == target.length) {
        const na = pow.toString().split('').sort().join('');

        if(na == target) return true;
        pow *= 2;
    }

    return false;
};