// Last updated: 8/26/2026, 10:01:23 PM
1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var isPalindrome = function(s) {
6    const chars = new Set('abcdefghijklmnopqrstuvwxyz1234567890'.split(''))
7    const isChar = (char) => {
8        return chars.has(char.toLowerCase())
9    }
10
11    const isSame = (ch1, ch2) => {
12        return ch1.toLowerCase() === ch2.toLowerCase();
13    }
14
15    let l=0; r=s.length-1;
16
17    while(l < r) {
18        while(l < r && !isChar(s[l])) l++;
19        while(l < r && !isChar(s[r])) r--;
20
21        if(!isSame(s[l], s[r])) return false;
22        
23        l++; r--;
24    }
25
26    return true;
27};