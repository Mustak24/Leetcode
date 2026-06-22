// Last updated: 6/22/2026, 12:52:15 PM
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let count = numBottles;
    
    (function fn (n = numBottles) {
        if(n < numExchange) return 0;

        const div = Math.floor(n / numExchange);
        const rem = n % numExchange;

        count += div;

        return fn(div + rem);
    })()

    return count;
};