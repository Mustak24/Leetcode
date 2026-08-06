// Last updated: 8/6/2026, 2:23:26 PM
1/**
2 * @param {number} n
3 * @param {number} t
4 * @return {number}
5 */
6var smallestNumber = function(n, t) {
7    for(let i=n; i<=100; i++) {
8        if(i < 10) {
9            if((i % t) === 0) return i;  
10            continue;
11        }
12
13        const first = Math.floor(i / 10);
14        const second = i % 10;
15
16        const pro = first * second;
17        if(pro % t === 0) return i;
18    }
19};