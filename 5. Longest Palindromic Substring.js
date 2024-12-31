/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let temp = [0,0,0];
    
    for(let i=0; i<s.length; i++){
        for(let j=i; j<s.length; j++){
            if(j-i+1 < temp[2]) continue;
            if(isPalindrom(s, i, j)){
                if(temp[2] < j-i+1) temp = [i, j, j-i+1]
            }
        }
    }

    let ans = ''
    for(let i=temp[0]; i<=temp[1]; i++) ans += s[i]

    return ans;
};

function isPalindrom(str, start, end){
    for(let i=start; i<=end; i++){
        if(str[i] != str[end - (i-start)]) return false;
    }
    return true;
}
