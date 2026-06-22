// Last updated: 6/22/2026, 12:51:18 PM
/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    cost.sort((a, b) => b - a);

    let ans = 0;
    for(let i=0; i<cost.length; i++) {
        if((i + 1) % 3 !== 0) {
            ans += cost[i]
        }
    }

    return ans;
};