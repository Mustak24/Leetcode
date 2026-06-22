// Last updated: 6/22/2026, 12:51:40 PM
/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    const max = n * n;
    let count = 0;

    for(let i=1; i<=n; i++) {
        const a = i * i;
        for(let j=1; j<=n; j++) {
            const ab = a  + (j * j);
            if(max < ab) break;
            for(let k=1; k<=n; k++) {
                const c = (k * k);
                if(max < c) break;
                if(c === ab) count++;
            }
        }
    }

    return count
};