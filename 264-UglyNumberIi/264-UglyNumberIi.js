// Last updated: 6/22/2026, 12:53:54 PM
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let uglyNum = [1];
    let n1 = 0;
    let n2 = 0;
    let n3 = 0; 
    while(uglyNum.length != n){
        let min = Math.min(uglyNum[n1]*2,uglyNum[n2]*3,uglyNum[n3]*5)
        if(!uglyNum.includes(min)) uglyNum.push(min)
        if(min == uglyNum[n1]*2) n1++;
        else if(min == uglyNum[n2]*3) n2++;
        else if(min == uglyNum[n3]*5) n3++;
    }
    return uglyNum.pop()
    
};