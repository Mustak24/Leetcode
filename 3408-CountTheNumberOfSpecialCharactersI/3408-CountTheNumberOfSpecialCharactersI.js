// Last updated: 6/22/2026, 12:49:07 PM
/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    const cap = new Array(26).fill(0);
    const sam = new Array(26).fill(0);

    const updateArr = (char) => {
        const charIndex = char.charCodeAt();
        if(charIndex >= 97) {
            sam[charIndex - 97] += 1;
        } else {
            cap[charIndex - 65] += 1;
        }
    }

    for(let char of word) updateArr(char)

    let count = 0;
    for(let i=0; i<26; i++) {
        if(cap[i] && sam[i]) count++;
    }
    
    return count;
};