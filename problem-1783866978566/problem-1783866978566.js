// Last updated: 7/12/2026, 8:06:18 PM
1/**
2 * @param {number[]} arr
3 * @return {number[]}
4 */
5var arrayRankTransform = function(arr) {
6    if(arr.length === 0) return [];
7    
8    arr = arr.map((e, i) => [e, i]).sort((a, b) => a[0] - b[0]);
9    
10    const ans = new Array(arr.length);
11    let rank = 1;
12    let pre = arr[0][0];
13
14    for(let i=0; i<arr.length; i++) {
15        if(arr[i][0] !== pre) rank++;
16
17        pre = arr[i][0];
18        ans[arr[i][1]] = rank;
19    }
20
21    return ans;
22};