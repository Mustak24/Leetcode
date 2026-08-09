// Last updated: 8/9/2026, 10:05:43 PM
1/**
2 * @param {number} num
3 * @return {string}
4 */
5var intToRoman = function(num) {
6    let ans = '';
7
8    const list = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
9
10    for(let [min, size] of list) {
11        while(num >= min) {
12            ans += size;
13            num -= min;
14        }
15    } 
16
17    return ans;
18};