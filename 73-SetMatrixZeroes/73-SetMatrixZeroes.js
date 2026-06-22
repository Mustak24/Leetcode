// Last updated: 6/22/2026, 12:54:11 PM
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rows = new Set();
    const cols = new Set();

    for(let i=0; i<matrix.length; i++) {
        for(let j=0; j<matrix[0].length; j++) {
            if(matrix[i][j] === 0) {
                rows.add(i);
                cols.add(j)
            } 
        }
    }

    for(let row of rows) {
        for(let i=0; i<matrix[0].length; i++) matrix[row][i] = 0;
    }

    for(let col of cols) {
        for(let i=0; i<matrix.length; i++) matrix[i][col] = 0;
    }

    return matrix
};