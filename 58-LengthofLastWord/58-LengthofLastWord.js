// Last updated: 8/9/2026, 10:12:37 PM
1/**
2 * @param {string} s
3 * @return {number}
4 */
5var lengthOfLastWord = function(s) {
6    const len = s.length;
7    
8    let end = len-1;
9    while(end >= 0 && s[end] === ' ') end--;
10
11    let ans = 0;
12    while(end >= 0 && s[end--] !== ' ') ans++;
13
14    return ans;
15};