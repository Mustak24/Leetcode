// Last updated: 6/22/2026, 12:55:07 PM
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;

    let left = 0, right = height.length-1;
    while(left < right) {
        const l1 = height[left], l2 = height[right];
        const y = Math.min(l1, l2);
        const x = right - left;

        max = Math.max(max, x * y);

        if(l1 < l2) left++;
        else right--;
    }

    return max;
};