// Last updated: 7/27/2026, 10:33:27 PM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var maxProduct = function(nums) {
6    const maxs = [nums[0], nums[1]].sort((a, b) => b - a);
7    
8    for(let i=2; i<nums.length; i++) {
9        if(maxs[0] < nums[i]) {
10            maxs[1] = maxs[0];
11            maxs[0] = nums[i];
12            continue;
13        }
14
15        if(maxs[1] < nums[i]) {
16            maxs[1] = nums[i];
17        }
18    }
19
20    return (maxs[0] - 1) * (maxs[1] - 1);
21};