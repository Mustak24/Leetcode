// Last updated: 6/22/2026, 12:48:39 PM
/**
 * @param {number} k
 * @param {number[]} operations
 * @return {character}
 */
var kthCharacter = function(k, operations) {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    
    function get2Power(num1, num2=1){
        if(num1 <= 1) return 0;
        if(num1 <= num2 * 2) return num2;
        return get2Power(num1, num2*2);
    }

    function getAns(k) {
        if(k === 1) return 0;
       
        const min2Power = get2Power(k);
        const diff = k - min2Power;

        if(diff === 0) return chars[min2Power];

        return 1 + getAns(diff);
    }

    let index = getAns(k) % chars.length;

    if(operations[0] === 0 && k%2 === 0) index--; 

    for(let i=1; i<operations.length; i++){
        if(operations[i] === 1) continue;

        if(2 ** i > k) break;

        let rem = k % 2**(i + 1);
        if(rem === 0) index--;
        else if(rem > 2**i) index--;
    }

    return chars[(index + chars.length) % chars.length]
};