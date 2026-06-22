// Last updated: 6/22/2026, 12:52:56 PM
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    
    const countMatrix = Array.from({length: m}, _ => Array.from({length: n}, _ => [0, 0]));

    const squarSide = (i, j) => {
        let size = 0;
        let MIN = Math.min(...countMatrix[i][j]);

        const fn = (i, j, s) => {
            if(i >= m || j >= n) return;
            s = Math.min(...countMatrix[i][j], s);

            if(s <= 0) return;

            size++;
            fn(i+1, j+1, s-1)
        }

        fn(i, j, MIN);
        return size;
    }


    for(let i=0; i<m; i++) {
        let count = 0;
        for(let j=n-1; j>=0; j--) {
            if(matrix[i][j] === 1) count++;
            else count = 0;
            countMatrix[i][j][0]  = count;
        }
    }

    for(let i=0; i<n; i++) {
        let count = 0;
        for(let j=m-1; j>=0; j--) {
            if(matrix[j][i] === 1) count++;
            else count = 0;
            countMatrix[j][i][1]  = count;
        }
    }


    let count = 0;
    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            count += squarSide(i, j)
        }
    }

    return count;
};