// Last updated: 8/9/2026, 10:33:30 PM
1/**
2 * @param {string} s
3 * @return {string}
4 */
5var reverseWords = function(s) {
6    return s.split(' ').filter(s => s.length).map(word => word.trim()).reverse().join(' ');
7};