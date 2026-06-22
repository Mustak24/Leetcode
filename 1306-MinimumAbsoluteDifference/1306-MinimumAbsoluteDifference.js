// Last updated: 6/22/2026, 12:53:01 PM
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);

    let minGap = arr[1] - arr[0];
    for(let i=2; i<arr.length; i++) {
        minGap = Math.min(minGap, arr[i] - arr[i-1]);
    }

    const ans = [];
    for(let i=1; i<arr.length; i++) {
        if((arr[i] - arr[i-1]) === minGap) {
            ans.push([arr[i-1], arr[i]]);
        }
    }
    
    return ans;
};