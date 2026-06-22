// Last updated: 6/22/2026, 12:50:46 PM
/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closestTarget = function(words, target, startIndex) {
    const set = new Set([target]);
    const len = words.length; 
    const secPartLen = words.length - startIndex;

    let min = -1;
    for(let i=0; i<len; i++) {
        if(!set.has(words[i])) continue;

        const d1 = Math.abs(startIndex - i);
        const d2 = (
            startIndex < i ? 
                Math.abs(startIndex + (len - i)) 
                : Math.abs(secPartLen + i)
        );
        
        if(min === -1) min = Math.min(d1, d2);
        else min = Math.min(min, d1, d2);
    }

    return min;
};