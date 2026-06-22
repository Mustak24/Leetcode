// Last updated: 6/22/2026, 12:49:28 PM
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let obj = {};
    let repeated = null, sum = 0;
    let row = grid.length;

    for(let i=0; i<row; i++){
        for(let j=0; j<row; j++){
            sum += grid[i][j];
            if(repeated != null) continue;

            if(grid[i][j] in obj) {
                repeated = grid[i][j];
            } else {
                obj[grid[i][j]] = true;
            }
        }
    }
    
    sum -= repeated;

    row *= row;

    return [repeated, row*(row+1)/2 - sum];


};