// Last updated: 6/22/2026, 12:52:43 PM
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    const arr = [];
    while(num) {
        arr.push(num % 10);
        num = Math.floor(num / 10);
    }

    let isDigitChange = false;
    for(let i=arr.length-1; i>=0; i--) {
        if(arr[i] === 6 && !isDigitChange){ 
            num = num * 10 + 9;
            isDigitChange = true;
        } else num = num * 10 + arr[i];
    }

    return num;
};