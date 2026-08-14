// Last updated: 8/14/2026, 10:33:25 AM
1/**
2 * @param {string} s
3 * @return {number}
4 */
5var maximumLengthSubstring = function(s) {
6    const feq = new Int32Array(26);
7    let size = 0;
8
9    let max = 1;
10    for(let i=0; i<s.length; i++) {
11        const charIndex = s[i].charCodeAt(0) - 97;
12
13        feq[charIndex] += 1;
14        size += 1;
15
16        while(feq[charIndex] > 2) {
17            size -= 1;
18            const lastIndex = s[i - size].charCodeAt(0) - 97;
19            feq[lastIndex] -= 1;
20        }
21       
22
23        max = Math.max(max, size);
24    }
25
26    return max;
27};