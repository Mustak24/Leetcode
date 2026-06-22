// Last updated: 6/22/2026, 12:55:06 PM
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const obj = {'1': 'I', '5': 'V', '10': 'X', '50': 'L', '100': 'C', '500': 'D', '1000': 'M'}

    let ans = []
    let base = 1;
    while(num) {
        const rem = num % 10;
        const n = rem * base;

        if(obj[n]) {
            ans.push(obj[n])
        } else if((rem + 1) % 5 === 0) {
            ans.push(obj[n + base])
            ans.push(obj[base])
        } else if(0 < rem && rem < 4) {
            for(let i=0; i<rem; i++) ans.push(obj[base]); 
        } else if(5 < rem && rem < 9) {
            for(let i=5; i<rem; i++) ans.push(obj[base]);
            ans.push(obj[5*base])
        }

        base *= 10;
        num = Math.floor(num / 10)
    }

    return ans.reverse().join('');
};