// Last updated: 6/22/2026, 12:53:28 PM
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    const toNum = (char) => char.charCodeAt(0);

    const key = toNum(target);

    for(let char of letters) {
        if(key < toNum(char)) return char;
    }

    return letters[0];
};