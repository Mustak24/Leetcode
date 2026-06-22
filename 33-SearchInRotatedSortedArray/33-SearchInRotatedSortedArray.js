// Last updated: 6/22/2026, 12:54:38 PM
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const len = nums.length;
    const peek = () => {
        let l=0, r=len-1;
        while(l < r) {
            const mid = Math.floor((l+r)/2);
            if(nums[l] < nums[mid]) l = mid;
            else r = mid;
        }
        return l;
    }

    const search = (l, r) => {
        while(l <= r) {
            const mid = Math.floor((l+r)/2);
            if(nums[mid] === target) return mid;
            
            if(nums[mid] < target) l = mid + 1;
            else r = mid - 1;
        }
        return -1;
    }

    if(nums[0] < nums[len-1]) return search(0, len-1)

    const mid = peek();
    return target < nums[0] ? search(mid + 1, len - 1) : search(0, mid);
};