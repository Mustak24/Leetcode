// Last updated: 6/22/2026, 12:53:33 PM
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x = 0, y = 0;
    
    for(let i=0; i<moves.length; i++) {
        switch (moves[i]) {
            case 'U': 
                y += 1; break;
            case 'D':
                y -= 1; break;
            case 'L':
                x -= 1; break;
            case 'R':
                x += 1; break;
        }
    }
    
    return (x === 0 && y === 0);
};