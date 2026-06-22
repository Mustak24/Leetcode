// Last updated: 6/22/2026, 12:53:16 PM
/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {

    let ans = [];
    let n = 0;

    for(let i=0; i<nums.length; i++) {
        const num = nums[i];
        n = (n << 1) + num;

        n = n % 10;
        
        ans.push(n === 5 || n === 0);
    }

    return ans;
};