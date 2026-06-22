// Last updated: 6/22/2026, 12:54:14 PM
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const maxLen = Math.max(a.length, b.length);
    a = a.padStart(maxLen, '0')
    b = b.padStart(maxLen, '0')

    const findSumCarry = (str) => {
        let one = 0;
        for(let char of str) if(char === '1') one++
        return [one%2 ? '1' : '0', one > 1 ? '1' : '0']
    }

    let c = '0';
    let ans = ''
    for(let i=maxLen-1; i>=0; i--) {
        let [sum, carry] = findSumCarry(c + a[i] + b[i]);
        ans = sum + ans;
        c = carry;
    }

    return c === '1' ? '1' + ans : ans;
};