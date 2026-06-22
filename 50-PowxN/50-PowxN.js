// Last updated: 6/22/2026, 12:54:32 PM
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n == 0) return 1;
    if(n%2) return (n>0 ? x : (1/x))*myPow(x, (n>0 ? n-1 : n+1));
    return myPow(x*x, n/2);
};