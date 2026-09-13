// Last updated: 9/13/2026, 11:09:04 AM
1/**
2 * @param {number[][]} img1
3 * @param {number[][]} img2
4 * @return {number}
5 */
6var largestOverlap = function(img1, img2) {
7    const SIZE = img1.length;
8
9    let max = 0;
10
11    for(let tx=-SIZE+1; tx<SIZE; tx++) {
12        for(let ty=-SIZE+1; ty<SIZE; ty++ ) {
13            let once = 0;
14            for(let i=0; i<SIZE; i++) {
15                const x = i + tx;
16                if(x < 0 || x >= SIZE) continue;
17                for(let j=0; j<SIZE; j++) {
18                    const y = j + ty;
19                    if(y < 0 || y >= SIZE || img2[j][i] === 0) continue;
20                    
21                    if(img1[y][x] === img2[j][i]) once++;
22                }
23            }
24
25            max = Math.max(max, once);
26        }
27    }
28
29    return max;
30};