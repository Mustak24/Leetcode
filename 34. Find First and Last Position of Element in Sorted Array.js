/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(target < nums[0] && target > nums[nums.length-1]) return [-1, -1]

    let left = 0;
    let right = nums.length-1;
    while(left <= right){
        let mid = parseInt((left+right)/2)
        if(nums[mid] < target) left = mid + 1;
        else if(nums[mid] > target) right = mid - 1;
        else{
            let start = mid
            let end = mid
            while(nums[start-1] == nums[mid]) start--;
            while(nums[end+1] == nums[mid]) end++;
            return [start, end]
        }
    }
    return [-1, -1]
};
