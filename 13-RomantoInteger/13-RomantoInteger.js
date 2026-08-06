// Last updated: 8/6/2026, 8:32:38 PM
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
16    let ans = 0;
17    for(let i=0; i<s.length; i++) {
18        const current = map[s[i]];
19        const next = map[s[i+1]] ?? 0;
20
21        if(current < next) ans -= current;
22        else ans += current;
23    }
24
25    return ans;
26};