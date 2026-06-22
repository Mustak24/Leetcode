// Last updated: 6/22/2026, 12:55:27 PM
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if(x<Math.pow(2,31) && x>= Math.pow(2,31)) return 0
    let num = x.toString().split('').toReversed().map(e => parseInt(e))
    if (x < 0) {
        num.pop();
        num = -1 * parseInt(num.join(''))
        return num >= -1 * Math.pow(2,31) ? num : 0;
    } else {
        num = parseInt(num.join(''))
        return num < Math.pow(2,31) ? num : 0;
    }
};