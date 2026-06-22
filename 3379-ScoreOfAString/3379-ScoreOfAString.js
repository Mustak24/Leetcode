// Last updated: 6/22/2026, 12:49:15 PM
/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
    let sum = 0;
    for (let i = 0; i < s.length - 1; i++) {
        sum = Math.abs(s.codePointAt(i) - s.codePointAt(i + 1)) + sum;
    }
    return sum;
};