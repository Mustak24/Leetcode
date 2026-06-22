// Last updated: 6/22/2026, 12:50:02 PM
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const num = init;
    return {
        increment(){
            return ++init;
        },
        decrement(){
            return --init;
        },
        reset(){
            init = num;
            return init;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */