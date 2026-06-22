// Last updated: 6/22/2026, 12:50:30 PM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function(nums) {
    const map = new Map();

    for(let i=0; i<nums.length; i++) {
        if(!map.has(nums[i])) {
            map.set(nums[i], [[i, i]]);
            continue;
        }

        const arr = map.get(nums[i]);
        arr.push([i, arr[arr.length-1][1] + i]);
    }

    const search = (arr, key) => {
        let l=0, r=arr.length-1;
        
        while(l <= r) {
            const m = Math.floor((l + r) / 2);
            if(arr[m][0] === key) return m + 1;
            
            if(arr[m][0] < key) l = m + 1;
            else r = m - 1;
        }

        return -1;
    }


    const ans = [];

    for(let i=0; i<nums.length; i++) {
        const arr = map.get(nums[i]);
        const pos = search(arr, i);

        const leftSum = (pos * i) - arr[pos - 1][1];
        const rightSum = ((arr.length - pos) * i) - (arr[arr.length - 1][1] - arr[pos-1][1]);
        
        ans.push(Math.abs(leftSum) + Math.abs(rightSum));
    }

    return ans;
};