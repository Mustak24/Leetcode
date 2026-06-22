// Last updated: 6/22/2026, 12:48:33 PM
/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    let obj = {};
    for(let i=0; i<s.length; i++){
        if(obj[s[i]]) obj[s[i]] += 1;
        else obj[s[i]] = 1; 
    }

    let odd = 0, even = Infinity;
    for(let key in obj) {
        if(obj[key] % 2){ 
            if(obj[key] > odd) odd = obj[key];
        } else if(obj[key] < even) {
            even = obj[key];
        }
    }

    return odd - even
};