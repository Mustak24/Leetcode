// Last updated: 6/22/2026, 12:50:20 PM
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        let len = functions.length;
        for(let i=1; i<=len; i++){
           x = functions[len-i](x)
        }
        return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */