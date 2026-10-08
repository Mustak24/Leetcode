// Last updated: 10/8/2026, 3:49:04 PM
1/**
2 * @param {string} s
3 * @return {string}
4 */
5var removeOuterParentheses = function(s) {
6    let ans = "";
7    let count = 1;
8
9    for(let i=1; i<s.length; i++) {
10        count += s[i] == '(' ? 1 : -1;
11        if(count == 0) {
12            count = 1; 
13            i += 1
14            continue;
15        }
16        ans += s[i];
17    }
18
19    return ans;
20};