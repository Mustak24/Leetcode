// Last updated: 6/22/2026, 12:50:33 PM
/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    let ans = [];
    let i=0, j=0;
    while(i < nums1.length || j < nums2.length){
        if(i == nums1.length){
            ans.push(nums2[j++]);
        } else if(j == nums2.length){
            ans.push(nums1[i++]);
        } else if(nums1[i][0] == nums2[j][0]){
            ans.push([nums1[i][0], nums1[i++][1] + nums2[j++][1]]);
        } else if(nums1[i][0] < nums2[j][0]){
            ans.push(nums1[i++]);
        } else if(nums1[i][0] > nums2[j][0]){
            ans.push(nums2[j++]);
        }
    }
    return ans;
};