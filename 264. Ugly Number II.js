/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let uglyNum = [1];
    let arr = [0, 0, 0] 
    while(uglyNum.length != n){
        let min = Math.min(uglyNum[arr[0]]*2,uglyNum[arr[1]]*3,uglyNum[arr[2]]*5)
        if(!uglyNum.includes(min)) uglyNum.push(min)
        if(min == uglyNum[arr[0]]*2) arr[0]++;
        else if(min == uglyNum[arr[1]]*3) arr[1]++;
        else if(min == uglyNum[arr[2]]*5) arr[2]++;
    }
    return uglyNum.pop()
    
};