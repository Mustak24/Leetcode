// Last updated: 7/28/2026, 11:24:41 PM
1/**
2 * @param {string} s
3 * @return {string}
4 */
5var smallestPalindrome = function(s) {
6    const mid = Math.floor(s.length / 2);
7    const alpha = new Array(26).fill(0);
8
9    const getIndex = (char) => char.charCodeAt(0) - 97;
10
11    for(let i=0; i<mid; i++) {
12        alpha[getIndex(s[i])] += 1;
13    }
14
15    const string = [];
16    for(let i=0; i<26; i++) {
17        for(let j=0; j<alpha[i]; j++) {
18            string.push(String.fromCharCode(97 + i))
19        }
20    }
21
22    let first = string.join('');
23    const center = s.length % 2 === 0 ? '' : s[mid];
24    let second = string.reverse().join('');
25    
26    return first + center + second;
27};