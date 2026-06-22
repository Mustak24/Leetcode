// Last updated: 6/22/2026, 12:49:59 PM
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let chunkArr = [], i=0;
    while(i!=arr.length){
        let tempArr = []
        for(let j=0; j<size; j++){
            if(i==arr.length) break;
            tempArr.push(arr[i])
            i++;
        }
        chunkArr.push(tempArr)
    }
    return chunkArr
};
