// Last updated: 6/22/2026, 12:50:01 PM
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let calls = true;
    return function(...args){
        if(calls){
            calls = false;    
            return fn(...args);
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
