// Last updated: 6/22/2026, 12:53:19 PM
/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    if(n === 0) return 1;
    
    let com = ~n;
    let ans = 0, base = 1;

    while(com !== -1) {
        const bit = (com & 1)  
        ans += (bit * base);

        com >>= 1
        base <<= 1;
    }

    return ans;
};