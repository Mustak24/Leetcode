// Last updated: 8/6/2026, 8:29:41 PM
1/**
2 * @param {string} s
3 * @return {number}
4 */
5var romanToInt = function(s) {
6    const map = {
7        'I': 1, 
8        'V': 5, 
9        'X': 10, 
10        'L': 50, 
11        'C': 100, 
12        'D': 500, 
13        'M': 1000
14    }
15
16    const temp = [];
17    for(let ch of s) temp.push(map[ch]);
18
19    let ans = temp[0];
20
21    for(let i=1; i<temp.length; i++) {
22        ans += temp[i];
23        if(temp[i] > temp[i-1]) ans -= (2 * temp[i-1]);
24    }
25
26    return ans;
27};