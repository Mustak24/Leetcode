// Last updated: 6/22/2026, 12:55:12 PM
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) return s;

    const arr = [];
    let index = 0;
    while(index < s.length) {
        const end = index + (arr.length % 2 ? numRows-2 : numRows)
        let temp = s.slice(index, end).split('')
        if(arr.length % 2) {
            temp = ['', ...temp, ...(new Array(numRows - temp.length-1))].reverse()
        }
        arr.push(temp)
        index = end;
    }

    let str = '';
    for(let i=0; i<numRows; i++) {
        for(let j=0; j<arr.length; j++) {
            str += arr[j][i] ?? ''

            if(str.length === s.length) return str;
        }
    }

    return str;
};