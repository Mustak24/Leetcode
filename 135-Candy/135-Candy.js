// Last updated: 8/5/2026, 11:26:11 PM
1/**
2 * @param {number[]} ratings
3 * @return {number}
4 */
5var candy = function(ratings) {
6    const len = ratings.length;
7    const child = ratings.map((r, i) => [r, i]).sort((a, b) => a[0] - b[0]);
8
9    const candy = new Array(len).fill(1);
10    
11    for(let [rating, index] of child) {
12        const L = index - 1; const LR = ratings[L], LC = candy[L] ?? 1; 
13        const R = index + 1; const RR = ratings[R], RC = candy[R] ?? 1;
14
15        if(rating < LR && rating < RR) continue;
16
17        candy[index] = Math.max(
18            rating > LR ? LC : 0,
19            rating > RR ? RC : 0,
20        ) + 1;
21    }
22
23    return candy.reduce((a, e) => a + e);
24};