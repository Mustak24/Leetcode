// Last updated: 9/24/2026, 10:24:59 AM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var smallestIndex = function(nums) {
6    function digitSum(num) {
7        let sum = 0
8        while(num) {
9            sum += (num % 10);
10            num = Math.floor(num / 10);
11        }
12        return sum;
13    }
14
15    for(let i=0; i<nums.length; i++) {
16        if(i === digitSum(nums[i])) return i;
17    }
18    
19    return -1;
20};