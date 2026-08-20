// Last updated: 8/20/2026, 9:54:59 AM
1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var resultArray = function(nums) {
6    const arr1 = [nums[0]];
7    const arr2 = [nums[1]];
8
9    for(let i=2; i<nums.length; i++) {
10        if(arr1.at(-1) > arr2.at(-1)) {
11            arr1.push(nums[i]);
12        } else {
13            arr2.push(nums[i]);
14        }
15    }
16
17    return [...arr1, ...arr2];
18};