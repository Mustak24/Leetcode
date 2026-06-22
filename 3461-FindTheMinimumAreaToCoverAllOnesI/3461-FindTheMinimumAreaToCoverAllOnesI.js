// Last updated: 6/22/2026, 12:49:03 PM
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function(grid) {
    const rows = grid.length, cols = grid[0].length;

    const x = [cols-1, 0], y = [rows-1, 0];

    for(let i=0; i<rows; i++) {
        for(let j=0; j<cols; j++) {
            if(grid[i][j] === 0) continue;

            if(x[0] > j) x[0] = j;
            if(y[0] > i) y[0] = i;

            if(x[1] < j) x[1] = j;
            if(y[1] < i) y[1] = i;
        }
    }

    const area = (x[1] - x[0] + 1) * (y[1] - y[0] + 1);

    return area < 0 ? 0 : area;
};