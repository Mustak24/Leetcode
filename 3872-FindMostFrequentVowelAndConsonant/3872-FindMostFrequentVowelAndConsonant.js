// Last updated: 6/22/2026, 12:48:20 PM
/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    const vowels = {a: 0, e: 0, i: 0, o: 0, u: 0};
    const consonant = {};

    for(let char of s) {
        if(vowels.hasOwnProperty(char)) {
            vowels[char] += 1;
        } else {
            consonant[char] = (consonant[char] ?? 0) + 1
        }
    }

    let maxVowel = 0;
    for(let key in vowels) 
        maxVowel = Math.max(maxVowel, vowels[key]) 

    let maxConsonant = 0;
    for(let key in consonant) 
        maxConsonant = Math.max(maxConsonant, consonant[key]) 

    return maxVowel + maxConsonant;
};