// Last updated: 8/5/2026, 2:03:19 PM
1/**
2 * @param {number} n
3 * @param {number} k
4 * @param {number[][]} invocations
5 * @return {number[]}
6 */
7var remainingMethods = function(n, k, invocations) {
8    const graph = {};
9
10    for(let i=0; i<n; i++) {
11        graph[i] = {
12            val: i, children: []
13        }
14    }
15
16    for(let [a, b] of invocations) {
17        graph[a].children.push(graph[b]);
18    }
19
20    const suspiciousNodes = new Set();
21
22    if(graph[k]) {
23        let index = 0;
24        const queue = [graph[k]];
25        while(index < queue.length) {
26            const node = queue[index++];
27            if(suspiciousNodes.has(node.val)) continue;
28
29            suspiciousNodes.add(node.val);
30
31            for(let child of node.children) {
32                queue.push(child);
33            }
34        }
35    }
36
37    for(let [a, b] of invocations) {
38        graph[b].children.push(graph[a]);
39    }
40
41    const ans = new Set();
42
43    for(let node in graph) {
44        if(suspiciousNodes.has(Number(node))) continue;
45
46        let index = 0;
47        const queue = [graph[node]]
48        while(index < queue.length) {
49            const node = queue[index++];
50            if(ans.has(node.val)) continue;
51
52            ans.add(node.val);
53
54            for(let child of node.children) {
55                queue.push(child);
56            }
57        }
58    }
59
60    return Array.from(ans);
61};