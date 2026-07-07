// Last updated: 7/7/2026, 12:23:18 PM
1/**
2 * @param {number} n
3 * @return {number}
4 */
5var sumAndMultiply = function(n) {
6    let x = 0;
7    let sum = 0;
8    let base = 0;
9    while(n) {
10        const rem = n % 10;
11        n = Math.floor(n / 10);
12        if(rem === 0) continue;
13        
14        sum += rem;
15        const m = rem * (10 ** base++);
16        x += m;
17    }
18
19    return x * sum;
20};