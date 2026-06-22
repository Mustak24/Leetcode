// Last updated: 6/22/2026, 12:53:13 PM
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let expected = heights.map(e=>e)
    expected.sort((a,b)=>a-b)
    let ans = 0;
    for(let i=0; i<heights.length; i++){
        if(heights[i] != expected[i]) ans++;
    }
    return ans;
};