// Last updated: 8/5/2026, 10:07:00 PM
1/**
2 * @param {number[]} gas
3 * @param {number[]} cost
4 * @return {number}
5 */
6var canCompleteCircuit = function(gas, cost) {
7    function isValidIndex(start) {
8        let fill = gas[start];
9        if(fill < cost[start]) return 0;
10        fill -= cost[start];
11
12        for(let i=1; i<gas.length; i++) {
13            const index = (start + i) % gas.length;
14            fill += gas[index];
15            
16            if(fill < cost[index]) return i;
17            fill -= cost[index];
18        }
19
20        return gas.length;
21    }
22    
23    for(let i=0; i<gas.length; i++) {
24        const index = isValidIndex(i);
25        if(index === gas.length) return i;
26        i = Math.max(i, index);
27    }
28
29    return -1;
30};