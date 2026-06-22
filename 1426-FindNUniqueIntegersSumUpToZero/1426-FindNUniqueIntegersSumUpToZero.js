// Last updated: 6/22/2026, 12:52:53 PM
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    const ans = [];
    if(n % 2 === 1) ans.push(0);

    let num = 1;
    while(ans.length !== n) {
        ans.push(num);
        ans.push(-1 * num);
        num += 1;
    }

    return ans;
};