// Last updated: 6/22/2026, 12:48:28 PM
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var canPartitionGrid = function(grid) {
    const m = grid.length, n = grid[0].length;

    const rowSum = new Array(m).fill(0);
    const colSum = new Array(n).fill(0);

    let total = 0;
    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            rowSum[i] += grid[i][j];
            colSum[j] += grid[i][j];
            total += grid[i][j];
        }
    }


    let sum = rowSum[0]
    for(let i=1; i<m; i++) {
        if(sum === (total - sum)) return true;
        sum += rowSum[i];
    }

    sum = colSum[0];
    for(let i=1; i<n; i++) {
        if(sum === (total - sum)) return true;
        sum += colSum[i];
    }

    return false;
};