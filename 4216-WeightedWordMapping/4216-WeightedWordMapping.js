// Last updated: 6/22/2026, 12:48:27 PM
/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    const result = 'zyxwvutsrqponmlkjihgfedcba', a = 'a'.charCodeAt(0);

    let ans = '';
    for(let word of words) {
        let val = 0;
        for(let ch of word) val += weights[ch.charCodeAt(0) - a];
        ans += result[val % 26];
    }

    return ans;
};