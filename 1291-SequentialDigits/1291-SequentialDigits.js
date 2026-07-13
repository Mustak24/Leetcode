// Last updated: 7/13/2026, 12:55:44 PM
1/**
2 * @param {number} low
3 * @param {number} high
4 * @return {number[]}
5 */
6var sequentialDigits = function(low, high) {
7    const ans = [];
8    let ldigit = low.toString().length;
9    let hdigit = high.toString().length;
10
11    while(ldigit <= hdigit) {
12        let num = 1;
13        for(let index = 2; index <= ldigit; index++) {
14            num *= 10;
15            num += index;
16        }
17
18        const base = new Array(ldigit).fill(1).reduce((a, b) => {
19            a = (a * 10) + b
20            return a
21        }, 0);
22
23        if(num > high) break;
24        if(num >= low) ans.push(num);
25        for(let i=ldigit; i<9; i++) {
26            num += base;
27            if(num > high) break;
28            if(num >= low) ans.push(num);
29        }
30
31        ldigit += 1;
32    }
33    console.log(ans)
34
35    return ans;
36};