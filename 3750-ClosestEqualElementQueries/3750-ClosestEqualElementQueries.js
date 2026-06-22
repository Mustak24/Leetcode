// Last updated: 6/22/2026, 12:48:35 PM
/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var solveQueries = function(nums, queries) {
    const map = new Map();
    for(let i=0; i<nums.length; i++) {
        if(map.has(nums[i])) {
            map.get(nums[i]).push(i);
        } else {
            map.set(nums[i], [i]);
        }
    }

    const minDis = (index) => {
        const arr = map.get(nums[index]);
        const len = arr.length;
        if(len < 2) return -1;

        const pos = search(arr, index);
        const leftPos = (len + pos - 1) % len;
        const rightPos = (len + pos + 1) % len;

        const d1 = twoIndexMinDistance(index, arr[leftPos], nums.length);
        const d2 = twoIndexMinDistance(index, arr[rightPos], nums.length);

        return Math.min(d1, d2);
    }


    const ans = [];
    for(let num of queries) {
        ans.push(minDis(num))
    }

    return ans;
};


function search(arr, key) {
    let l = 0, r = arr.length-1;
    while(l <= r) {
        const m = Math.floor((l + r) / 2);
        if(arr[m] === key) return m;

        if(arr[m] < key) l = m + 1;
        else r = m - 1;
    }

    return -1;
}


function twoIndexMinDistance(i1, i2, len) {
    const min = Math.min(i1, i2);
    const max = Math.max(i1, i2);

    const d1 = max - min;
    const d2 = min + (len - max);

    return Math.min(d1, d2);
}