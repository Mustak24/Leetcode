// Last updated: 6/22/2026, 12:50:14 PM
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filterArr = [];
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i], i, arr)){
            filterArr.push(arr[i]);
        }
    }
    return filterArr;
};