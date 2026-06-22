// Last updated: 6/22/2026, 12:54:34 PM
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    for(let row=0; row<9; row++) {
        let rows = [];
        let cols = [];

        for(let col=0; col<9; col++) {
            if(rows.includes(board[row][col])) return false;
            if(cols.includes(board[col][row])) return false;
            
            if(board[row][col] !== '.')
                rows.push(board[row][col]);
            
            if(board[col][row] !== '.')
                cols.push(board[col][row]);
        }
    }

    for(let row=0; row<9; row+=3) {
        for(let col=0; col<9; col+=3) {
            let block = [];
            
            let y1 = row, y2 = row + 3;
            let x1 = col, x2 = col + 3;

            for(let i=y1; i<y2; i++) {
                for(let j=x1; j<x2; j++) {
                    if(block.includes(board[i][j]))
                        return false;

                    if(board[i][j] !== '.')
                        block.push(board[i][j]);
                }
            }
        }
    }


    return true;
};