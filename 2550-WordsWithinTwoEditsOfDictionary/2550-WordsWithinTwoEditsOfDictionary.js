// Last updated: 6/22/2026, 12:50:53 PM
/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function(queries, dictionary) {
    const isMatch = (s1, s2) => {
        let mismatch = 0;
        
        for(let i=0; i<s1.length; i++) {
            if(s1[i] !== s2[i]) mismatch += 1;
            if(mismatch > 2) return false;
        }
        
        return true;
    }

    let ans = [];
    for(let query of queries) {
        for(let word of dictionary) {
            if(isMatch(query, word)) {
                ans.push(query);
                break;
            }
        }
    } 

    return ans;
};