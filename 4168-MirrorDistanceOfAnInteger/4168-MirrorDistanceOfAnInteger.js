// Last updated: 6/22/2026, 12:48:24 PM
/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    let mirror = 0;
    for(let num=n; num !== 0; num = Math.floor(num / 10)) {
        const rem = num % 10;
        mirror = (mirror * 10) + rem;
    }

    return Math.abs(mirror - n);
};