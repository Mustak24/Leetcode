// Last updated: 6/22/2026, 12:52:16 PM
/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {

    const fn = (n) => (n * n + n) / 2;

    
    let ans = 0;
    let count = 0;
    for(let i=0; i<s.length; i++) {
        if(s[i] === '0') {
            ans += fn(count);
            count = 0;
        } else {
            count += 1;
        }
    }

    ans += fn(count);

    ans %= (1_000_000_000 + 7)

    return ans;
};