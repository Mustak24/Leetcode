// Last updated: 6/22/2026, 12:51:24 PM
/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
var decodeCiphertext = function(encodedText, rows) {

    const cols = Math.ceil(encodedText.length / rows);

    let ans = '';


    for(let i=0; i<cols; i++) {
        for(let j=0; j<rows; j++) {
            const index = (j * cols + (i + j));
            if(index >= encodedText.length) break;
            ans += encodedText[index];
        }
    }

    return ans.trimEnd();
};