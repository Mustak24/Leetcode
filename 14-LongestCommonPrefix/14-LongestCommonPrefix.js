// Last updated: 8/9/2026, 10:24:41 PM
1/**
2 * @param {string[]} strs
3 * @return {string}
4 */
5var longestCommonPrefix = function(strs) {
6
7    function prefixLen(s1, s2) {
8        const maxLen = Math.max(s1.length, s2.length);
9
10        let len = 0;
11        while(len < maxLen) {
12            if(s1[len] !== s2[len]) break;
13            len++;
14        }
15
16        return len;
17    }
18
19    let prefix = strs[0];
20    
21    for(let i=1; i<strs.length; i++) {
22        prefix = prefix.slice(0, prefixLen(prefix, strs[i]));
23        if(!prefix) return prefix;
24    }
25
26    return prefix
27};