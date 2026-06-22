// Last updated: 6/22/2026, 12:51:01 PM
/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let min = 0;
    for(let i=0; i<k; i++) if(blocks[i] == 'W') min++;

    let j = k, count = min;
    for(let i=1; i<=blocks.length-k; i++){
        let temp1 = blocks[j++] == 'W' ? 1 : 0;
        let temp2 = blocks[i-1] == 'W' ? 1 : 0;
        count += temp1 - temp2;

        if(count == 0) return 0;

        if(min > count) min = count;
    }

    return min;
};