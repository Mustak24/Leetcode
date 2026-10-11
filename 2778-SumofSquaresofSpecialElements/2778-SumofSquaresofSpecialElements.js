// Last updated: 10/11/2026, 11:59:04 AM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var sumOfSquares = function(nums) {
6    const n = nums.length;
7    
8    let ans = 0;
9    for(let i=0; i<n; i++) {
10        if((n % (i + 1)) === 0) {
11            ans += (nums[i] * nums[i]);
12        }
13    }
14
15    return ans;
16};