// Last updated: 9/14/2026, 6:39:22 PM
1/**
2 * @param {number[]} rec1
3 * @param {number[]} rec2
4 * @return {boolean}
5 */
6var isRectangleOverlap = function(rec1, rec2) {
7    const [x1, y1, x2, y2] = rec1;
8    const [x3, y3, x4, y4] = rec2;
9
10    const x21 = x2 - x1;
11    const x43 = x4 - x3;
12    const x41 = x1 < x4 ? x4 - x1 : x2 - x3;
13    
14    if(x21 + x43 <= x41) return false;
15
16    const y21 = y2 - y1;
17    const y43 = y4 - y3;
18    const y41 = y1 < y4 ? y4 - y1 : y2 - y3;
19
20    if(y21 + y43 <= y41) return false;
21
22    return true;
23};