// Last updated: 6/22/2026, 12:52:46 PM
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let zero = s[0] == '0';
    let one = 0;
    for(let i=1; i<s.length; i++){
        if(s[i] == '1') one++;
    }

    let max = zero+one;
    for(let i=1; i<s.length-1; i++){
        s[i] == '0' ? zero++ : one--;
        if(max < zero+one){
            max = zero + one;
        }
    }

    return max;
};