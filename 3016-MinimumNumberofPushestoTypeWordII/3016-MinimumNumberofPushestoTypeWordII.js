// Last updated: 7/31/2026, 1:20:39 PM
1/**
2 * @param {string} word
3 * @return {number}
4 */
5var minimumPushes = function(word) {
6    const map = new Map();
7    for(let char of word) {
8        map.set(char, (map.get(char) ?? 0) + 1);
9    }
10
11    const entries = Array.from(map).sort((a, b) => b[1] - a[1]);
12    
13    let weight = 0, ans = 0;
14    for(let i=0; i<entries.length; i++) {
15        if(i % 8 === 0) weight ++;
16        ans += (weight * entries[i][1]);
17    }
18
19    return ans;
20};