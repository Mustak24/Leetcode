// Last updated: 6/22/2026, 12:51:07 PM
/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let max = -1;

    for(let i=2; i<num.length; i++) {
        if(num[i] === num[i-1] && num[i] === num[i-2]) {
            const n = Number(num[i]);
            if(max < n) max = n;
            i += 2
        }
    }

    return max === -1 ? "" : "".padStart(3, max);
};