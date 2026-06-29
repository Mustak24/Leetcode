// Last updated: 6/29/2026, 11:50:23 AM
1/**
2 * @param {string[]} patterns
3 * @param {string} word
4 * @return {number}
5 */
6var numOfStrings = function(patterns, word) {
7    let count = 0;
8    for(let pattern of patterns) {
9        if(word.includes(pattern)) count++;
10    }
11    return count;
12};