// Last updated: 6/22/2026, 12:54:06 PM
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const ans = [];

    const dfs = (node) => {
        if(node === null) return;

        dfs(node.left);
        ans.push(node.val)
        dfs(node.right);
    }

    dfs(root);
    
    return ans;
};