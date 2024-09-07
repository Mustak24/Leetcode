/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs = strs.sort()
    let i = 0;
    while(strs[0][i] == strs[strs.length-1][i] && i<strs[0].length) i++;
    return strs[0].slice(0, i);
};