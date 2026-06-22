// Last updated: 6/22/2026, 12:50:56 PM
/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
    let sentLen = sentence.length
    for(let i=0; i<sentLen; i++){
        if(sentence[i] != ' ') continue;
        if(sentence[i-1] != sentence[i+1]) return false;
    }
    return (sentence[0] == sentence[sentLen - 1]);
};