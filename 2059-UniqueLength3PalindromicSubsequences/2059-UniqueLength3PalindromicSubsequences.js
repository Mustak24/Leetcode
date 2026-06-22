// Last updated: 6/22/2026, 12:51:39 PM
/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    const charMap = new Map();

    for(let i=0; i<s.length; i++) charMap.set(s[i], i);

    const inUsed = new Set();

    let ans = 0;
    for(let i=0; i<s.length; i++) {
        if(inUsed.has(s[i]) || !charMap.has(s[i])) continue;
        const lastIndex = charMap.get(s[i]);

        if(lastIndex - i < 2) continue;
        
        inUsed.add(s[i]);
        const tempSet = new Set();
        for(let j=i+1; j<lastIndex; j++) tempSet.add(s[j]);
        ans += tempSet.size;
    }

    return ans;
};