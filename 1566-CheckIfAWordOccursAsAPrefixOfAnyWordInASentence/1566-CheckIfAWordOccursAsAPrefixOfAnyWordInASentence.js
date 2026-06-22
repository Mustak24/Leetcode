// Last updated: 6/22/2026, 12:52:31 PM
/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
 
var isPrefixOfWord = function(sentence, searchWord) {
    sentence = sentence.split(' ');
    sentence.push('')
    for(let i=0; i<sentence.length; i++){  
        if(isPrefix(sentence[i], searchWord)) return i+1;
    }
    return -1
};

function isPrefix(sent, pre){
    for(let i=0; i<pre.length; i++){
        if(sent[i] != pre[i]) return false
    }
    return true;
}