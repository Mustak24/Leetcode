// Last updated: 6/22/2026, 12:54:29 PM
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const size = matrix.length, m = matrix;
    for(let i=0; i<size/2; i++) {
        for(let j=i; j<size-i-1; j++) {
            [m[j][i], m[i][size-j-1]] = [m[i][size-j-1], m[j][i]]
        }

        for(let j=i; j<size-i-1; j++) {
            [m[j][i], m[size-i-1][j]] = [m[size-i-1][j], m[j][i]]
        }

        for(let j=i; j<size-i-1; j++) {
            [m[size-i-1][j], m[size-j-1][size-i-1]] = [m[size-j-1][size-i-1], m[size-i-1][j]]
        }
    }
};