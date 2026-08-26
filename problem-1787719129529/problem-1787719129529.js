// Last updated: 8/26/2026, 10:08:49 AM
1/**
2 * @param {string} s
3 * @param {number} k
4 * @return {string}
5 */
6var shortestBeautifulSubstring = function(s, k) {
7    let onces = 0, l=0, sliceIndexs = [], minLen = s.length;
8    for(let i=0; i<s.length; i++) {
9        if(s[i] === '1') onces++;
10        
11        while(l < i && onces > k) {
12            if(s[l++] === '1') onces--;
13        }
14
15        while(l < i && s[l] === '0') l++;
16
17        const len = i - l + 1
18        if(onces === k && minLen >= len) {
19            if(minLen === len) {
20                sliceIndexs.push(l);
21            } else {
22                minLen = len;
23                sliceIndexs = [l];
24            }
25        }
26    }
27
28    if(sliceIndexs.length === 0) return "";
29
30
31    for(let i=0; i<minLen; i++) {
32        const onces = [], zeros = [];
33        for(let sliceIndex of sliceIndexs) {
34            if(s[sliceIndex + i] === '0') {
35                zeros.push(sliceIndex);
36            } else {
37                onces.push(sliceIndex);
38            }
39        }
40
41        if(zeros.length > 0) sliceIndexs = zeros;
42        else sliceIndexs = onces;
43    }
44
45    return s.slice(sliceIndexs[0], sliceIndexs[0] + minLen);
46};