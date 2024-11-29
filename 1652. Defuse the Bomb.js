/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    let ans = [];
    let len = code.length
    if (!k) return code.map(e => 0);
    for (let i = 0; i < code.length; i++) {
        let temp = [];
        if (k > 0) {
            for (let j = i + 1; j <= i + k; j++) {
                temp.push(code[j < len ? j : j - len])
            }
        } else {
            for(let j=i-1; j>=i+k; j--){
                temp.push(code[j >= 0 ? j : len + j ]);
            }
        }
        ans.push(temp.reduce((a, b) => a + b));
    }
    return ans
};
