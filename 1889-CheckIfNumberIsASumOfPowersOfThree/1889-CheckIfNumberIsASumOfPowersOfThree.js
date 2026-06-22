// Last updated: 6/22/2026, 12:52:02 PM
/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
    let sum = 0;
    let power = new Map()
    function temp(n){
        if(n == 0) return;
        let tempNum  = Math.floor(Math.log(n)/Math.log(3))
        if(tempNum == 0) return n;
        if(power.has(tempNum)) return false
        power.set(tempNum, 1)
        sum += 3**tempNum
        return temp(n - 3**tempNum);
    }
    temp(n)
    return sum == n || sum+1 == n;
};