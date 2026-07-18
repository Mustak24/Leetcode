// Last updated: 7/18/2026, 12:13:34 PM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var findGCD = function(nums) {
6    let min = max = nums[0];
7
8    for(let num of nums) {
9        min = Math.min(num, min);
10        max = Math.max(num, max);
11    }
12
13    for(let base = min; base > 0; base--) {
14        if(min % base === 0 && max % base === 0) return base;
15    }
16
17    return 1;
18
19};