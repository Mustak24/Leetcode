// Last updated: 6/22/2026, 12:52:48 PM
/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    const isValidNumber = (num) => {
        while(num) {
            const rem = num % 10;
            if(rem === 0) return false;
            num = Math.floor(num / 10);
        }
        return true;
    }

    for(let i=1; i<n; i++) {
        if(isValidNumber(i) && isValidNumber(n - i)) 
            return [i, n-i];
    }
};