// Last updated: 6/22/2026, 12:49:54 PM
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe(x){
            if(val===x) return true;
            throw new Error('Not Equal');
        },
        notToBe(x){
            if(val!==x) return true;
            throw new Error('Equal');
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */