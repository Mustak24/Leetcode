// Last updated: 6/22/2026, 12:52:58 PM
/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {

    let steps = 0;

    for(let i=1; i<points.length; i++) {
        steps += Math.max(
            Math.abs(points[i][0] - points[i-1][0]),
            Math.abs(points[i][1] - points[i-1][1])
        )
    }

    return steps;
};