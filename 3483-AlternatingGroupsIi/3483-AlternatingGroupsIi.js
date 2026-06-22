// Last updated: 6/22/2026, 12:48:57 PM
/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors, k) {
    let ans = 0, count = 1, len = colors.length;
    let range = len + k - 1;
    for(let i=1; i<range; i++){
        let index1 = (i-1 + len)%len;
        let index2 = (i + len)%len;
        if(colors[index1] != colors[index2]) count++;
        else count = 1;

        if(count >= k) ans++;
    }

    return ans;
};
