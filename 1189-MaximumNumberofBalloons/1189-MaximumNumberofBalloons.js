// Last updated: 6/22/2026, 12:57:36 PM
1/**
2 * @param {string} text
3 * @return {number}
4 */
5var maxNumberOfBalloons = function(text) {
6    const requirements = {b: 1, a: 1, l: 2, o: 2, n: 1};
7    const chars = {};
8    for(let char of text) {
9        chars[char] = (chars[char] ?? 0) + 1;
10    }
11
12    let min = Infinity;
13    for(let char of 'abcdefghijklmnopqrstuvwxyz') {
14        if(requirements[char]) {
15            const val = Math.floor((chars[char] ?? 0) / requirements[char]);
16            min = Math.min(min, val)
17        }
18    } 
19
20    return min;
21};