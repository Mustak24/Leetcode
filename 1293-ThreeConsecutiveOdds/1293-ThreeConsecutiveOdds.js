// Last updated: 6/22/2026, 12:53:05 PM
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2==1 && arr[i+1]%2==1 && arr[i+2]%2==1)
            return true;
    }
    return false;
};