/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
    let x = mean*(rolls.length+n) - rolls.reduce((a,b)=>a+b,0);
    if(x<n || x>n*6 || x<0) return []
    let arr = Array.from({length: n}, (e)=>1)
    let sum = n
    while(true){
        for(let i=0; i<arr.length; i++){
            if(sum == x) return arr;
            if(arr[i]<6){
                arr[i] = arr[i] + 1
                sum++
            }
        }
    }
};