/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let temp = [];
    let len = matrix.length;
    for(let i=0; i<len; i++){
        temp = []
        for(let j=0; j<len; j++){
            temp.unshift(matrix[j][i])
        }
        matrix.push(temp);
    }
    for(let i=0; i<len; i++) matrix.shift()
    return matrix
};