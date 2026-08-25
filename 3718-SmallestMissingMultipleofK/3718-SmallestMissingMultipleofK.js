// Last updated: 8/25/2026, 12:04:07 PM
1/**
2 * @param {number[]} nums
3 * @param {number} k
4 * @return {number}
5 */
6var missingMultiple = function(nums, k) {
7    const multiple = nums.map(num => num % k === 0 ? (num / k) - 1 : -1);
8
9    let index = 0;
10    while(index < multiple.length) {
11        if(multiple[index] === -1 || multiple[index] === index) {
12            index++; 
13            continue;
14        }
15
16        if(multiple[index] < 0 || multiple[index] >= multiple.length || multiple[index] === multiple[multiple[index]]) {
17            multiple[index++] = -1;
18            continue;
19        }
20
21        const temp = multiple[multiple[index]];
22        multiple[multiple[index]] = multiple[index];
23        multiple[index] = temp;
24    }
25
26    console.log(multiple)
27    for(let i=0; i<multiple.length; i++) {
28        if(multiple[i] === -1) return k * (i + 1);
29    }
30
31    return k * (multiple.length + 1);
32};