// Last updated: 6/22/2026, 12:51:42 PM
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let str = '_abcdefghijklmnopqrstuvwxyz'
    s = s.split('').reduce((a,b)=>a+str.indexOf(b).toString(),'')  
    for(let i=0; i<k; i++){
        s = s.split('').reduce((a,b)=>parseInt(a)+parseInt(b)).toString()
    }
    return s
};