// Last updated: 6/22/2026, 12:53:06 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    const map = new Map();

    const fn = (n) => {
        if(map.has(n)) return map.get(n);
        
        let divisors = [1, n];
    
        for(let i=2; i*i<=n; i++) {
            if(n % i !== 0) continue;

            divisors.push(Math.floor(n / i));
            
            if(Math.floor(n / i) !== i)
                divisors.push(i);

            if(divisors.length > 4) break;
        }

        map.set(n, divisors);
        return divisors;
    }


    let sum = 0;
    for(let num of nums) {
        const divisors = fn(num);
        if(divisors.length === 4) 
            sum += divisors.reduce((a, b) => a + b);
    }

    return sum;
};