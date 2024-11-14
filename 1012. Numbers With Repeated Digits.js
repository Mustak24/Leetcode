/**
 * @param {number} n
 * @return {number}
 */

function isDigitRipit(num){
    let temp = [0,0,0,0,0,0,0,0,0,0]
    while(num){
        let rem =  num%10
        num = parseInt(num/10)
        if(temp[rem]) return true
        temp[rem] = 1
    }
    return false
}

function countNum(numLen){
    let count = 9
    for(let i=0; i<numLen-1; i++){
        count *= (9 - i)
    }
    return count
}

function countNum1(num1, num2){
    num1 = String(num1)
    num2 = String(num2)
    let setArr = [[-1]]
    let ans = []
    for(let i=0; i<num1.length; i++){
        let tempArr = []
        let start = Number(num1[i])
        let end = Number(num2[i])
        for(let i=start; i<=end; i++){
            tempArr.push(i)
        }
        let count = end - start + 1
        for(let i=0; i<setArr.length; i++){
            for(let j=0; j<tempArr.length; j++){
                if(setArr[i].includes(tempArr[j])){
                    count--
                    break
                }
            }
        }
        ans.push(count)
        setArr.push(tempArr)
    }
    return ans.reduce((a,b)=>a*b,1)
}

function findCount(x, y){
    let count = 0
    for(let i=x; i<=y; i++){
        if(!isDigitRipit(i)) count ++
    }
    return count
}


var numDupDigitsAtMostN = function(n) {
    let totalCount = n
    if(n < Math.pow(10, 6)) return n+1 - findCount(0, n);
    
    let strN = String(n)
    for(let i=1; i<strN.length; i++) totalCount -= countNum(i);
    
    let tempN = Math.pow(10, strN.length-1)
    for(let i=0; n - tempN > Math.pow(10, 4); i++){
        let strTempN = String(tempN)
        let base = Math.pow(10, strN.length-i-1)
        let endCount = tempN + (i ? parseInt(strN[i]) : parseInt(strN[i])-1)*base -1
        if(strN[i] != strTempN[i]) totalCount -= countNum1(tempN, endCount)
        tempN += (i ? parseInt(strN[i]) : parseInt(strN[i])-1) * base
    }
    
    totalCount -= findCount(tempN, n)
    
    return totalCount
};
