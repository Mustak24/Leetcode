/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    s = s.split('')
    let ans = []
    let obj = {
        '(':')',
        '[':']',
        '{':'}'
    }
    for(let i=0; i<s.length; i++){
        if(')]}'.includes(s[i])){
            if(obj[ans.pop()] != s[i])
                return false
        } else{
            ans.push(s[i])
        }
    }
    return ans.length ? false : true
};