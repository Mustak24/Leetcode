// Last updated: 6/22/2026, 12:48:38 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    const digitSum = (n) => {
        let sum = 0;
        while(n) {
            sum += (n % 10);
            n = Math.floor(n / 10);
        }
        return sum;
    }

    let min = digitSum(nums[0]);
    for(let i=1; i<nums.length; i++) {
        min = Math.min(min, digitSum(nums[i]));
    }
    
    return min;
};