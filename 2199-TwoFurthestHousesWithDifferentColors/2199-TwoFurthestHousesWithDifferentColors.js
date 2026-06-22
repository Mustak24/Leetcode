// Last updated: 6/22/2026, 12:51:23 PM
/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    const end = colors.length - 1;

    if(colors[0] !== colors[end]) return end;

    let l=1, r=end-1;
    while(l <= r) {
        if(colors[0] !== colors[l]) return end - l;
        if(colors[0] !== colors[r]) return r;
        l++; r--;
    }
};