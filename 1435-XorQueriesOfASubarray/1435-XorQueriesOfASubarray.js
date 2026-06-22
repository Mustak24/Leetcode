// Last updated: 6/22/2026, 12:52:50 PM
/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    let ans = []
    for(let i=0; i<queries.length; i++){
        ans.push(arr.slice(queries[i][0], queries[i][1]+1).reduce((a,b)=>a^b,0))
    }
    return ans
};