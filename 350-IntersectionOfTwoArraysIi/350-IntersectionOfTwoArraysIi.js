// Last updated: 6/22/2026, 12:53:49 PM
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let ans = []
    for(let i=0; i<nums2.length; i++){
        if(nums1.includes(nums2[i])){
            ans.push(nums2[i])
            let arr1 = nums1.slice(0,nums1.indexOf(nums2[i]))
            let arr2 = nums1.slice(nums1.indexOf(nums2[i])+1)
            nums1 = arr1.concat(arr2)
        }
    }
    return ans;

};