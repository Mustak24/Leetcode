// Last updated: 6/22/2026, 12:52:38 PM
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const countOnces = (num) => {
        let once = 0;

        while(num) {
            if((num & 1) === 1) once++;
            num >>= 1; 
        }

        return once;
    }

    for(let i in arr) {
        arr[i] = [arr[i], countOnces(arr[i])];
    }


    return arr.sort((a, b) => (
        (a[1] - b[1]) || (a[0] - b[0])
    )).map(e => e[0]);
};