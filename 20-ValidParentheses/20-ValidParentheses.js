// Last updated: 10/1/2026, 10:15:37 AM
1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var isValid = function(s) {
6    const map = {
7        ')': '(',
8        '}': '{',
9        ']': '['
10    }
11
12    const stack = [];
13    
14    for(let bracket of s) {
15        if(!map[bracket]) stack.push(bracket);
16        else if(stack.pop() != map[bracket]) return false;
17    }
18
19    return stack.length == 0;
20};