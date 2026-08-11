// Last updated: 8/11/2026, 10:07:52 AM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var missingInteger = function(nums) {
6    const set = new Set(nums);
7    
8    let prefixSum = nums[0];
9    for(let i=1; i<nums.length; i++) {
10        if(nums[i] - nums[i-1] !== 1) break;
11        prefixSum += nums[i];
12    }
13    
14    while(set.has(prefixSum)) prefixSum++;
15
16    return prefixSum;
17};