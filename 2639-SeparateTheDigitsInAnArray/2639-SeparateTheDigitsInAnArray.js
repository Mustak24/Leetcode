// Last updated: 6/22/2026, 12:50:36 PM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    const ans = [];

    for(let i=nums.length-1; i>=0; i--) {
        let n = nums[i]
        while(n) {
            const rem = n % 10;
            n = Math.floor(n / 10);
            ans.push(rem);
        }
    }

    let l=0, r=ans.length-1;
    while(l < r) {
        const temp = ans[l];
        ans[l] = ans[r];
        ans[r] = temp;
        l++; r--;
    }

    return ans;
};