// Last updated: 8/4/2026, 1:52:22 PM
1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var productExceptSelf = function(nums) {
6    let zeroCount = 0, totalProduct = 1;
7    for(let num of nums) {
8        if(num === 0) {
9            zeroCount++;
10            if(zeroCount === 2) break;
11        }
12    }
13
14    const ans = new Int32Array(nums.length);
15    if(zeroCount === 2) return ans;
16
17    let totalPro = 1, zeroIndex;
18    for(let i=0; i<nums.length; i++) if(nums[i] !== 0) totalPro *= nums[i]; else zeroIndex = i;
19
20    if(zeroCount === 1) {
21        ans[zeroIndex] = totalPro;
22        return ans;
23    }
24
25    for(let i=0; i<nums.length; i++) {
26        ans[i] = totalPro / nums[i];
27    }
28
29    return ans;
30};