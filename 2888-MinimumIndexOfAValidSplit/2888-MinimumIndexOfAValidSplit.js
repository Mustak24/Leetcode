// Last updated: 6/22/2026, 12:49:34 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function(nums) {
    let numsMap = {};
    for(let i=0; i<nums.length; i++){
        if(numsMap[nums[i]]) numsMap[nums[i]] += 1;
        else numsMap[nums[i]] = 1; 
    }

    let leftNums = {};

    for(let i=0; i<nums.length; i++){
        if(leftNums[nums[i]]) leftNums[nums[i]] += 1;
        else leftNums[nums[i]] = 1;

        let leftCount = leftNums[nums[i]];
        let rightCount = numsMap[nums[i]] - leftCount;
        if( 2*leftCount > i + 1 && 2*rightCount > nums.length - i - 1 ) return i;
    }
    return -1;
};