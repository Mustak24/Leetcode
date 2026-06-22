// Last updated: 6/22/2026, 12:50:09 PM
/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof (arr[i]) != 'number') {
                let temp = arr[i].length-1;
                arr.splice(i, 1, ...arr[i])
                i += temp;
            }
        }
    }
    return arr
};