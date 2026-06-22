// Last updated: 6/22/2026, 12:49:29 PM
/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let l=0, r=0, b=0;
    
    for(let i=0; i<moves.length; i++) {
        switch(moves[i]) {
            case 'L': l++; break;
            case 'R': r++; break;
            case '_': b++; break;
        }
    }

    return Math.abs(l - r) + b;
};