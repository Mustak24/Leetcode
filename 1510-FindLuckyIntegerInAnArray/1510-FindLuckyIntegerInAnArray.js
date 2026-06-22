// Last updated: 6/22/2026, 12:52:41 PM
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const count = {};
    for(let num of arr){
        if(count[num]) count[num]+=1;
        else count[num] = 1;
    }

    let ans = -1;
    for(let key in count){
        key = Number(key)
        if(key == count[key] && ans < key) {
            ans = key;
        }
    }

    return ans;
};