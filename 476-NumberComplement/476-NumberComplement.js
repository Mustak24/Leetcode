// Last updated: 6/22/2026, 12:53:43 PM
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    return parseInt(num.toString(2).split('').map(e=>{
        if(e == '1') return '0';
        return '1';
    }).join(''), 2)
    
};