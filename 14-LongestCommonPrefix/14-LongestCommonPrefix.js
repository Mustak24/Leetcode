// Last updated: 6/22/2026, 12:54:59 PM
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.includes("")) return "";
    if(strs.length === 0) return "";
    if(strs.length === 1) return strs[0];


    let prefix = strs[0][0];

    const fn = () => {
        const index = prefix.length-1;
        const char = prefix[index];

        for(let i=1; i<strs.length; i++) {
            const word = strs[i];

            if(index >= word.length || char !== word[index]) 
                return prefix.slice(0, index);
        }

        if(index + 1 >= strs[0].length) return prefix;

        prefix += strs[0][index + 1];

        return fn();
    }

    return fn();
};