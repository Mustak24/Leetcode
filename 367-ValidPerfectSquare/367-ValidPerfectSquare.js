// Last updated: 6/22/2026, 12:53:46 PM
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let x = 1
    while(true){
        if(x*x > num) return false;
        else if(x*x == num) return true;
        x++;
    }
};