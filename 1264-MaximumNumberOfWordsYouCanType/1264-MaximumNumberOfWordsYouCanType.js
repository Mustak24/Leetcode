// Last updated: 6/22/2026, 12:53:08 PM
/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    const canType = (word) => {
        for(let char of word)
            if(brokenLetters.includes(char))
                return false;
        return true;
    }

    return text.split(' ').reduce((a, b) => a + (canType(b) ? 1 : 0), 0);
};