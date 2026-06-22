// Last updated: 6/22/2026, 12:51:47 PM
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function(nums1, nums2) {
    const search = (num, i) => {
        num -= 0.1;

        let l = i, r = nums2.length-1;
        while(l <= r) {
            const m = Math.floor((l + r) / 2);
            if(nums2[m] === num) return m;
            
            if(nums2[m] > num) l = m + 1;
            else r = m - 1;
        }

        return r;
    }  

    let max = 0, __max = nums2[nums2.length-1];

    for(let i=0; i<nums1.length; i++) {
        if(nums1[i] > nums2[i]) continue;

        const index = search(nums1[i], i);
        if(index < nums2.length && index >= i) {  
            max = Math.max(index - i, max);
        };
    }

    return max;
};