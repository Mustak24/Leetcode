// Last updated: 8/14/2026, 11:20:06 PM
1/**
2 * @param {string} haystack
3 * @param {string} needle
4 * @return {number}
5 */
6var strStr = function(haystack, needle) {
7    const prefixSubfix = (() => {;
8        let lps = new Int32Array(needle.length);
9        let i=1, j=0
10        while(i < needle.length) {
11            if(needle[i] === needle[j]) {
12                lps[i++] = ++j; 
13            } else if(j !== 0) {
14                j = lps[j-1];
15            } else {
16                lps[i++] = 0;
17            }
18        }
19        return lps;
20    })()
21
22    let i=0, j=0;
23    while(i < haystack.length) {
24        if(needle[j] === haystack[i]) {
25            i++;
26            j++;
27        } else if(j !== 0) {
28            j = prefixSubfix[j-1];
29        } else {
30            i++;
31        }
32
33        if(j === needle.length) return i - needle.length;
34    }
35
36    return -1;
37};