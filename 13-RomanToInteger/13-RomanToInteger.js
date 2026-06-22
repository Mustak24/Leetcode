// Last updated: 6/22/2026, 12:55:01 PM
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let obj = {I: 1, V: 5, X: 10, L: 50, C:100, D: 500, M: 1000};
    let ans = 0;
    s = s.split('');
    for(let i=0; i<s.length; i++){
        if(obj[`${s[i]}`] < obj[`${s[i+1]}`]){ 
            ans += obj[`${s[i+1]}`] - obj[`${s[i]}`];
            i++;
        }else {
            ans += obj[`${s[i]}`];
        }
    }
    return ans;
};