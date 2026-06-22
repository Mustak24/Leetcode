// Last updated: 6/22/2026, 12:52:52 PM
/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    const visited = new Set();

    const dfs = (index) => {
        if(index < 0 || index >= arr.length) return false;
        if(arr[index] === 0) return true;
        if(visited.has(index)) return false;

        visited.add(index);
        
        const l = dfs(index - arr[index]);
        if(l) return l;

        const r = dfs(index + arr[index]);
        return r
    }

    return dfs(start)

};