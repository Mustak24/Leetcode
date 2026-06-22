// Last updated: 6/22/2026, 12:49:12 PM
/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    if(word.length < 3) return false;

    let numbers = '0123456789';
    let vowels = 'aeiou';
    let consonants = 'qwrtypsdfghjklzxcvbnm';

    let [hasVow, hasCon] = [false, false, false];
    for(let char of word) {
        char = char.toLowerCase();

        if(vowels.includes(char)) hasVow = true;
        else if(consonants.includes(char)) hasCon = true;
        else if(!numbers.includes(char)) return false;

    }
    
    return (hasVow && hasCon);
};