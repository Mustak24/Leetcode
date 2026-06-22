// Last updated: 6/22/2026, 12:55:14 PM
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    x = x.toString()
    let len = x.length;
    for(let i=0; i<len; i++){
        if(x[i]!=x[len-1-i]) return false;
    }
    return true
};