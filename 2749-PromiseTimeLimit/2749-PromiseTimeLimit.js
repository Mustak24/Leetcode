// Last updated: 6/22/2026, 12:50:11 PM
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
        let p1 = fn(...args);
        let p2 = new Promise((res,rej)=>{
            setTimeout(()=>{
                rej('Time Limit Exceeded')
            },t)
        })
        return Promise.race([p1,p2])
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */