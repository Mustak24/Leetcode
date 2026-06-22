// Last updated: 6/22/2026, 12:48:25 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    const map = new Map();

    const add = (n, i) => {
        if(!map.has(n)) return map.set(n, [i]);
        map.get(n).push(i);
    }

    for(let i=0; i<nums.length; i++) {
        add(nums[i], i);
    }

    let min = -1;
    for(let val of map.values()) {
        if(val.length < 3) continue;
        
        let minDis = -1;
        for(let i=2; i<val.length; i++) {
            const a = val[i-2], b = val[i-1], c = val[i];
            const dis = Math.abs(a - b) + Math.abs(b - c) + Math.abs(c - a);
            
            if(minDis === -1) minDis = dis;
            else minDis = Math.min(minDis, dis);
        }
        
        if(min === -1) min = minDis;
        else min = Math.min(min, minDis);
    } 

    return min;
};