// Last updated: 8/19/2026, 11:26:33 PM
1/**
2 * @param {number} n
3 * @param {number[][]} reservedSeats
4 * @return {number}
5 */
6var maxNumberOfFamilies = function(n, reservedSeats) {
7    const map = new Map();
8    
9    for(let [row, seat] of reservedSeats) {
10        if(seat === 1 || seat === 10) continue;
11        if(map.has(row)) map.get(row).push(seat);
12        else map.set(row, [seat]);
13    }
14
15    let ans = 0;
16    for(let [row, seats] of map) {
17        if(seats.length > 4) continue;
18        if(seats.length === 1) {
19            ans += 1;
20            continue;    
21        } 
22
23        const rowSet = new Set(seats);
24        for(let validSeat of [[2,3,4,5], [4,5,6,7], [6,7,8,9]]) {
25            if(validSeat.every(seat => !rowSet.has(seat))) {
26                ans += 1;
27                break;
28            }
29        }
30    }
31
32    ans += (2 * (n - map.size));
33    return ans;
34};