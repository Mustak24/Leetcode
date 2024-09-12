/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let ans = 0;
    for(let i=0; i<words.length; i++){
        let j=0;
        for(j; j<words[i].length; j++){
            if(!allowed.includes(words[i][j])) break;
        }
        if(j==words[i].length) ans++;
    }
    return ans;
};