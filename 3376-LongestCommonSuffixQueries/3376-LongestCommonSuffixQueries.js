// Last updated: 6/22/2026, 12:49:18 PM
/**
 * @param {string[]} wordsContainer
 * @param {string[]} wordsQuery
 * @return {number[]}
 */
var stringIndices = function(wordsContainer, wordsQuery) {
    const prefixTree = {};
    let min = {
        len: wordsContainer[0].length,
        id: 0
    }

    function add(str, id) {
        const len = str.length;
        if(min.len > len) min = {len, id};
        
        const fn = (node, index) => {
            if(index < 0) return;
            const val = node[str[index]];

            if(!val) {
                node[str[index]] = {id, val: str[index], len};
            } else if(len < val.len) {
                val.id = id;
                val.len = len;
            }

            fn(node[str[index]], index-1)
        }
        fn(prefixTree, len-1);
    }  

    for(let i=0; i<wordsContainer.length; i++) add(wordsContainer[i], i);
    
    let ans = [];
    for(let word of wordsQuery) {
        let index = word.length-1;
        let node = prefixTree;
        while(index >= 0) {
            const val = node[word[index]];
            index -= 1;
            if(!val) break

            node = val;
        }
        
        ans.push(node.id ?? min.id);
    }

    return ans;
};