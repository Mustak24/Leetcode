// Last updated: 6/22/2026, 12:54:13 PM
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let temp = new Array(n+2).fill(0);
    temp[0] = 1;
    for(let i=0; i<n; i++) {
        temp[i+1] += temp[i]
        temp[i+2] += temp[i]
    }

    return temp[n]

};