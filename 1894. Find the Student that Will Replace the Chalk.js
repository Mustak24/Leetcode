/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    k %= chalk.reduce((a,b)=>a+b);
    for(let i=0; i<chalk.length; i++){
        k-=chalk[i]
        if(k<0) return i
    }
};