// Last updated: 6/22/2026, 12:49:35 PM
/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const ASCII = (char) => char.charCodeAt(0);
    const CHAR = (ascii) => String.fromCharCode(ascii);

    const arr = new Array(ASCII('z') - ASCII('A') + 1).fill(0);

    const base = ASCII('A');
    const vowels = 'aeiouAEIOU';

    for(let char of s) {
        if(vowels.includes(char)) {
            arr[ASCII(char) - base] += 1;
        }
    }

    let index = 0;

    let ans = ''
    for(let char of s) {
        while(arr[index] === 0) index++;

        if(vowels.includes(char)) {
            ans += CHAR(base + index);
            arr[index] -= 1;
        } else ans += char;
    }

    return ans;
};