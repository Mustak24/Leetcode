// Last updated: 6/22/2026, 12:55:30 PM
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let subStr = [];
    let temp = [];
    let p = 0;
    for (let i = 0; i < s.length; i++) {
        if (!temp.includes(s[i])) {
            temp.push(s[i]);
        } else {
            subStr.push(temp.length);
            temp = [];
            i = p;
            p++;
        }
    }
    subStr.push(temp.length);
    subStr.sort((a, b) => b - a);
    return subStr[0]
};