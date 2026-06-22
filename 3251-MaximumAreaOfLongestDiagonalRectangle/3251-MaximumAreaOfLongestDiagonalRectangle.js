// Last updated: 6/22/2026, 12:49:27 PM
/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    const diagonal = dimensions.map(([x, y]) => (x*x + y*y));

    let maxD = diagonal[0];
    let maxA = 0;

    for(let i=1; i<diagonal.length; i++) {
        if(maxD < diagonal[i]) {
            maxD = diagonal[i];
            maxA = i;
        } else if(maxD === diagonal[i]) {
            let a = dimensions[maxA];
            let b = dimensions[i];
            if(a[0] * a[1] < b[0] * b[1]) maxA = i;
        }
    }

    return dimensions[maxA].reduce((a, b) => a * b, 1);
};