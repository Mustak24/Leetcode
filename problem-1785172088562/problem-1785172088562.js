// Last updated: 7/27/2026, 10:38:08 PM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var maxProduct = function(nums) {
6    if(nums[0] < nums[1]) {
7        nums[0] = nums[0] ^ nums[1];
8        nums[1] = nums[0] ^ nums[1];
9        nums[0] = nums[0] ^ nums[1];
10    }
11
12    for(let i=2; i<nums.length; i++) {
13        if(nums[0] < nums[i]) {
14            nums[1] = nums[0];
15            nums[0] = nums[i]
16        } else if(nums[1] < nums[i]){
17            nums[1] = nums[i];
18        }
19    }
20
21    return (nums[0] - 1) * (nums[1] - 1);
22};