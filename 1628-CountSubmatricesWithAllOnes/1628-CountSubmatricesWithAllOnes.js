// Last updated: 6/22/2026, 12:52:19 PM
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function(mat) {
    const rows = mat.length, cols = mat[0].length;

    const countMatrix = Array.from({length: rows}, _ => Array.from({length: cols}, _ => [0, 0]));

    for(let i=0; i<rows; i++) {
        let count = 0;
        for(let j=cols-1; j>=0; j--) {
            if(mat[i][j]) count++;
            else count = 0;

            countMatrix[i][j][0] = count;
        }
    }
    
    for(let i=0; i<cols; i++) {
        let count = 0;
        for(let j=rows-1; j>=0; j--) {
            if(mat[j][i]) count++;
            else count = 0;

            countMatrix[j][i][1] = count;
        }
    }

    const subMat = (i, j) => {
        if(mat[i][j] === 0) return 0;
        const [xRange, yRange] = countMatrix[i][j];
        let count = 1 + xRange-1 + yRange-1;

        let min = yRange-1;
        for(let x=1; x<xRange; x++) {
            min = Math.min(countMatrix[i][j + x][1]-1, min);
            if(min < 1) return count;
            count += min;
        }

        return count;
    }

    // console.log(mat)

    let count = 0;
    for(let i=0; i<rows; i++) {
        // let temp = ''
        for(let j=0; j<cols; j++) {
            count += subMat(i, j)
            // temp += subMat(i, j) + ' '
        }
        // console.log(temp)
    }

    return count;
};