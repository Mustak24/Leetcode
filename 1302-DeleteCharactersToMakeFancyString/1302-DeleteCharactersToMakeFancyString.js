// Last updated: 6/22/2026, 12:53:03 PM
/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let ans = s[0];
    let count = 1;

    for(let i=1; i<s.length; i++) {
        if(s[i] !== s[i-1]) {
            count = 1;
            ans += s[i];
        } else if(count < 2) {
            ans += s[i];
            count++;
        }
    }

    return ans;
};