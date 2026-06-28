// Last updated: 6/28/2026, 12:46:35 PM
1/**
2 * @param {number[]} arr
3 * @return {number}
4 */
5var maximumElementAfterDecrementingAndRearranging = function(arr) {
6    arr.sort((a, b) => a - b);
7    
8    let ans = 0;
9    for(let num of arr) {
10        if(num > ans) ans++;
11    }
12
13    return ans;
14
15};