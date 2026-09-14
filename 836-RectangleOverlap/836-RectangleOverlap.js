// Last updated: 9/14/2026, 7:00:46 PM
1/**
2 * @param {number[]} rec1
3 * @param {number[]} rec2
4 * @return {boolean}
5 */
6var isRectangleOverlap = function(rec1, rec2) {
7    const w = Math.min(rec1[2], rec2[2]) - Math.max(rec1[0], rec2[0]);
8    const h = Math.min(rec1[3], rec2[3]) - Math.max(rec1[1], rec2[1]);
9    return w > 0 && h > 0;
10};