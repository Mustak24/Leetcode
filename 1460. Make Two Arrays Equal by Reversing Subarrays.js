/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    arr = arr.sort((a,b)=>a-b)
    target = target.sort((a,b)=>a-b)
    return target.toString() == arr.toString()
};