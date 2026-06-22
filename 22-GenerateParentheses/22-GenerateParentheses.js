// Last updated: 6/22/2026, 12:54:51 PM
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const isValid = (str) => {
        let open = 0, close = 0;
        for(let char of str) char === '(' ? open++ : close++;
        return open >= close && open <= n;
    }

    let ans = ['(']
    for(let i=1; i<2*n; i++) {
        ans = ans.map((str) => {
            let l = str + ')';
            let r = str + '(';
            let temp = []
            if(isValid(l)) temp.push(l)
            if(isValid(r)) temp.push(r)

            return temp
        }).flat();
    }

    return ans;
};