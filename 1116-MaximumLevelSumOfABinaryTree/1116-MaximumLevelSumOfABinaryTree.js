// Last updated: 6/22/2026, 12:53:15 PM
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    const map = {};

    const queue = [];
    let index = 0;

    const bfs = (node, level) => {
        if(node === null) return;
        
        map[level] = node.val + (map[level] ?? 0);
        queue.push([node.left, level + 1]);
        queue.push([node.right, level + 1]);

        while(index < queue.length) {
            const [node, level] = queue[index++]
            bfs(node, level);
        }
    }

    bfs(root, 1);

    console.log(map)

    let maxInfo = {val: map[1], level: 1};
    for(let level in map) {
        if(maxInfo.val < map[level]) {
            maxInfo = {
                level, val: map[level]
            }
        }
    }

    return Number(maxInfo.level);
};