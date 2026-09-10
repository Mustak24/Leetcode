// Last updated: 9/10/2026, 11:36:31 AM
1/**
2 * Definition for a binary tree node.
3 * function TreeNode(val, left, right) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.left = (left===undefined ? null : left)
6 *     this.right = (right===undefined ? null : right)
7 * }
8 */
9/**
10 * @param {TreeNode} root
11 * @return {number}
12 */
13var averageOfSubtree = function(root) {
14    let count = 0;
15
16    function fn(node) {
17        if(!node) return [0, 0];
18
19        const [leftVal, leftNodes] = fn(node.left)
20        const [rightVal, rightNodes] = fn(node.right);
21
22        const val = leftVal + rightVal + node.val;
23        const nodes = leftNodes + rightNodes + 1;
24
25        const avg = val / nodes;
26        // const diff = Math.abs(avg - node.val);
27        if(Math.floor(avg) === node.val) {
28            // console.log(node.val, Math.abs(avg - node.val), avg);
29            count++;
30        }
31
32        return [val, nodes];
33    }  
34
35    fn(root);
36
37    return count;
38};