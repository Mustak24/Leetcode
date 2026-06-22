// Last updated: 6/22/2026, 12:49:10 PM
/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    const upper = new Array(26).fill(-1);
    const small = new Array(26).fill(-1);
    const a = 'a'.charCodeAt(0), A = 'A'.charCodeAt(0);

    for(let i=0; i<word.length; i++) {
        const val = word[i].charCodeAt(0);
        const index = val < a ? val - A : val - a;

        if(val >= a){
            small[index] = i;
        } else if(upper[index] === -1) {
            upper[index] = i
        } 
    }

    let count = 0;
    for(let i=0; i<26; i++) {
        if(small[i] !== -1 && upper !== -1 && small[i] < upper[i]) count++;
    }

    return count;
};