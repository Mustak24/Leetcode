// Last updated: 6/22/2026, 12:50:43 PM
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {
    function isPrime(n){
        if(n == 1) return false;
        if(n == 2 || n == 3) return true;
        if(n%2 == 0 || n%3 == 0) return false;
        for(let i=5; i*i<=n; i+=6){
            if(n%i == 0 || n%(i+2) == 0) return false;
        }
        return true;
    }

    let primeNums = [];
    for(let i=left; i<=right; i++){
        if(isPrime(i)) primeNums.push(i);
    }

    if(primeNums.length < 2) return [-1, -1]

    let min = [0,1];
    for(let i=1; i<primeNums.length-1; i++){
        let diff = primeNums[i+1] - primeNums[i];
        if(diff < primeNums[min[1]] - primeNums[min[0]])
            min = [i, i+1]; 
    }

    return [primeNums[min[0]], primeNums[min[1]]]

};