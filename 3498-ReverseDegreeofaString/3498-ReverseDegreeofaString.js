// Last updated: 9/20/2026, 9:14:28 AM
1/**
2 * @param {string} s
3 * @return {number}
4 */
5var reverseDegree = function(s) {
6    let ans = 0;
7    for(let i=0; i<s.length; i++) {
8        ans += (26 - (s[i].charCodeAt(0) - 97)) * (i + 1)
9    }
10    return ans;
11};