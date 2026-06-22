// Last updated: 6/22/2026, 12:51:12 PM
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function(num1, num2) {
    
    let count = 0;
    while(num1 && num2) {  
        if(num1 >= num2) {
            const div = Math.floor(num1 / num2);
            const rem = num1 % num2;
            count += div;
            num1 = rem;
        } else {
            const div = Math.floor(num2 / num1);
            const rem = num2 % num1;
            count += div;
            num2 = rem;
        }
    }

    return count;
};