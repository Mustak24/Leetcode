// Last updated: 6/22/2026, 12:53:25 PM
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(goal.length !== s.length) return false
    return (goal + goal).includes(s);
};