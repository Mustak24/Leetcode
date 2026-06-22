// Last updated: 6/22/2026, 12:51:35 PM
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    const size = matrix.length;

    let sum = 0;
    let min = Math.abs(matrix[0][0]);
    let negVals = 0;

    for(let row of matrix) {
        for(let col of row) {
            if(col < 0) negVals++;

            const val = Math.abs(col)
            sum += Math.abs(val);
            min = Math.min(min, val);
        }
    }

    if(negVals % 2 === 0) return sum;
    return sum - (2 * min);
};