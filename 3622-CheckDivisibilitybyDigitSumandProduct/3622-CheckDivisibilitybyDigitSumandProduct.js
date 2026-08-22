// Last updated: 8/22/2026, 8:36:28 AM
1/**
2 * @param {number} n
3 * @return {boolean}
4 */
5var checkDivisibility = function(n) {
6    let sum = 0, pro = 1;
7
8    let temp = n
9    while(temp) {
10        const rem = temp % 10;
11        sum += rem;
12        pro *= rem;
13        temp = Math.floor(temp / 10);
14    }
15    
16    return n % (pro + sum) === 0;
17};