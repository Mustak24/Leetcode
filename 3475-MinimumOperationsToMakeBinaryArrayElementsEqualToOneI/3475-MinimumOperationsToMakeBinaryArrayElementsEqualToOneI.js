// Last updated: 6/22/2026, 12:49:02 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let ans = 0;
    let len = nums.length;
    
    const flip = (index) => {
        ans++;
        for(let i=0; i<3; i++)
            nums[index + i] ^= 1;
    }
    
    for(let i=0; i<len-2; i++)
        if(nums[i] == 0) 
            flip(i);
    
    
    for(let i=1; i<=3; i++)
        if(nums[len-i] == 0) 
            return -1;
    
    return ans
};