// Last updated: 6/22/2026, 12:49:23 PM
/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    capacity.sort((a, b) => b - a);
    
    const total = apple.reduce((a, b) => a + b);

    let ans = 0;
    let sum = 0;
    for(let cap of capacity) {
        ans += 1;
        sum += cap;

        if(sum >= total) return ans;
    }

};