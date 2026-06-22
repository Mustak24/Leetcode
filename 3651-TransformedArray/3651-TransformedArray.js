// Last updated: 6/22/2026, 12:48:36 PM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
    const len = nums.length;
    const ans = [];

    for(let i=0; i<len; i++) {
        const pos = i + nums[i];
        const rem = Math.abs(pos) % len;

        ans.push(
            nums[
                pos < 0 ? (
                    (len - rem) % len
                ) : rem
            ]
        );
    }

    return ans;
};