// Last updated: 6/22/2026, 12:53:41 PM
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    const rows = mat.length, cols = mat[0].length;
    const ans = [];

    let row = 0, col = 0;
    let len = rows * cols;
    while(ans.length !== len) {
        while(0 <= row && row < rows && 0 <= col && col < cols) 
            ans.push(mat[row--][col++]);

        if(row < 0 && col < cols) row = 0;
        else if(col >= cols) {
            row += 2;
            col = cols - 1;
        }

        while(0 <= row && row < rows && 0 <= col && col < cols) 
            ans.push(mat[row++][col--])
        
        if(col < 0 && row < rows) col = 0;
        else if(row >= rows) {
            col += 2;
            row = rows - 1;
        }
    }
    
    return ans
};