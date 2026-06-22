// Last updated: 6/22/2026, 12:51:04 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    const len = nums.length;

    const SN = (n) => {
        return n * (n + 1) / 2
    }

    let count = 0;
    for(let i=0; i<len; i++) {
        if(nums[i] === 0) {
            let streak = 1;
            while(++i < len && nums[i] === 0) streak++;
            count += SN(streak);
        }
    }

    return count;
};