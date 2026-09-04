// Last updated: 9/4/2026, 8:01:34 PM
1/**
2 * @param {string} s
3 * @param {string} t
4 * @return {boolean}
5 */
6var isSubsequence = function(s, t) {
7    if(s === '') return true;
8    
9    let index = 0;
10
11    for(let ch of t) {
12        if(s[index] === ch) {
13            index++;
14
15            if(index === s.length) {
16                return true;
17            }
18        }
19    }
20
21    return false;
22};