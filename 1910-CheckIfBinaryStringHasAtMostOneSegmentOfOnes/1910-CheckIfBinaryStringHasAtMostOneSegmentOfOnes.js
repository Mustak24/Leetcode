// Last updated: 6/22/2026, 12:51:57 PM
/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    let foundZero = false
    
    for(let i=0; i<s.length; i++) {
        if(foundZero && s[i] === '1') return false; 
        if(s[i] === '0') foundZero = true;
    }

    return true
};