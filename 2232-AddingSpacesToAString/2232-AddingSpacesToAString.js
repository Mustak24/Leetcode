// Last updated: 6/22/2026, 12:51:26 PM
/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let ans = '';
    let j = 0;
    for(let i=0; i<s.length; i++){
        if(i != spaces[j]) ans += s[i];
        else {
            ans += ' ' + s[i];
            j++;
        }
    }
    return ans;
};