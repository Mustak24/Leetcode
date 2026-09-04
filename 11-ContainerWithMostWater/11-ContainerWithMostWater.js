// Last updated: 9/4/2026, 8:11:48 PM
1/**
2 * @param {number[]} height
3 * @return {number}
4 */
5var maxArea = function(height) {
6    let l=0, r=height.length-1, max = 0;
7
8    while(l < r) {
9        const cap = (r - l) * Math.min(height[l], height[r]);
10        max = Math.max(max, cap);
11
12        if(height[l] < height[r]) l++;
13        else r--;
14    } 
15
16    return max;
17};