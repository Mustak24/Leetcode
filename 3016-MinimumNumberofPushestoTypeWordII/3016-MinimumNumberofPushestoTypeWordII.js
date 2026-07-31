// Last updated: 7/31/2026, 1:23:52 PM
1/**
2 * @param {string} word
3 * @return {number}
4 */
5var minimumPushes = function(word) {
6    const counts = new Int32Array(26);
7    for(let char of word) {
8        counts[char.charCodeAt(0) - 97] += 1
9    }
10
11   counts.sort((a, b) => b - a);
12    
13    let weight = 0, ans = 0;
14    for(let i=0; i<26; i++) {
15        if(i % 8 === 0) weight ++;
16        ans += (weight * counts[i]);
17    }
18
19    return ans;
20};