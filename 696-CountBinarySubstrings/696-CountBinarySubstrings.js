// Last updated: 6/22/2026, 12:53:31 PM
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    if(s.length == 1) return 0;

    let count = 0;

    function expend(l, r){
        if(l < 0 || r >= s.length) return;
        if(s[l] === s[r]) return;

        if(r - l == 1) {
            count++;
            return expend(l-1, r+1);
        }

        if(s[l] === s[l+1] && s[r] === s[r-1]) {
            count++;
            return expend(l-1, r+1);
        }
    }

    for(let i=0; i<s.length-1; i++) {
        expend(i, i+1);
    }

    return count;
};