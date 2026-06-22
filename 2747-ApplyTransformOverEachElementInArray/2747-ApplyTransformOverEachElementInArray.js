// Last updated: 6/22/2026, 12:50:13 PM
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  let mapArr = [];
  for(let i=0; i<arr.length; i++){
    mapArr.push(fn(arr[i], i, arr));
  }
  return mapArr;
};