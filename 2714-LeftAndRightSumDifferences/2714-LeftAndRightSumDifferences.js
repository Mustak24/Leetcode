// Last updated: 6/22/2026, 12:50:31 PM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    const leftSum = [0];
    for(let i=0; i<nums.length-1; i++) {
        leftSum.push(leftSum[leftSum.length-1] + nums[i]);
    }

    const rightSum = [0];
    for(let i=nums.length-1; i>=1; i--) {
        rightSum.push(rightSum[rightSum.length-1] + nums[i]);
    }

    const ans = [];
    for(let i=0; i<nums.length; i++) {
        ans.push(Math.abs(leftSum[i] - rightSum[nums.length-i-1]));
    }

    return ans;
};