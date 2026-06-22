// Last updated: 6/22/2026, 12:50:51 PM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {

    for(let i=0; i<nums.length; i++){
        if(nums[i] == nums[i+1]){
            nums[i] *= 2;
            nums[i+1] = 0;
        }

        let j = i;
        while(j > 0 && nums[j-1] == 0){
            let temp = nums[j];
            nums[j] = nums[j-1];
            nums[j-1] = temp;
            j--;
        }
    }

    return nums
};