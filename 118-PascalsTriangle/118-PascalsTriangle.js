// Last updated: 6/22/2026, 12:54:05 PM
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const ans = [[1]];
    for(let row = 1; row < numRows; row++) {
        const temp = [1];
        for(let len = 1; len < row; len++) {
            temp.push(ans[row-1][len-1] + ans[row-1][len])
        }
        temp.push(1);
        ans.push(temp);
    }

    return ans;
};