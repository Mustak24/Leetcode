// Last updated: 6/22/2026, 12:54:10 PM
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const rows = matrix.length, cols = matrix[0].length;

    let top = 0, bottom = rows-1;
    while(top <= bottom) {
        const mid = Math.floor((top + bottom) / 2);
        const row = matrix[mid];

        if(row[0] === target || row[cols-1] === target) 
            return true;

        if(row[0] < target && target < row[cols-1]) {
            let left = 0, right = cols-1;
            while(left <= right) {
                const mid = Math.floor((left + right) / 2);
                
                if(row[mid] === target) return true;

                if(row[mid] < target) left = mid + 1;
                else right = mid - 1; 
            }

            return false;
        }

        if(row[0] < target) top = mid + 1;
        else bottom = mid - 1;
    }

    return false;
};