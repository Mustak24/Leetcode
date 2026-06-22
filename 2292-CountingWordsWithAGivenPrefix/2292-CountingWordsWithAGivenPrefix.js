// Last updated: 6/22/2026, 12:51:08 PM
/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let ans = 0;
    
    function isPrefix(word){
        if(pref.length > word.length) return false;
        for(let i=0; i<pref.length; i++)
            if(pref[i] != word[i]) return false 
        return true
    }
    
    for(let i=0; i<words.length; i++){
        if(isPrefix(words[i])) ans++
    }
        
    return ans
};

