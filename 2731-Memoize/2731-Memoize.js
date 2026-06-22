// Last updated: 6/22/2026, 12:50:27 PM
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    var allArgs = {};
    return function (...args) {
        if(args in allArgs) return allArgs[args];
        allArgs[args] = fn(...args);
        return allArgs[args];
    };
};


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */