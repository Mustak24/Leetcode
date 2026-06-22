// Last updated: 6/22/2026, 12:54:40 PM
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {

    const swap = (i, j) => {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    let l = nums.length-1, r = l;
    while(l > 0) {
        if(nums[l-1] < nums[l]) break;
        l--;
    }

    if(l > 0) {
        for(let i=r; r>=0; i--) {
            if(nums[l-1] < nums[i]) {
                swap(l-1, i);
                break;
            }
        }
    }

    while(l < r) {
        swap(l, r);
        l++; r--;
    }

    return nums;
};