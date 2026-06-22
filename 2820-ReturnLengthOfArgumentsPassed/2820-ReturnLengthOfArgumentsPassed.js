// Last updated: 6/22/2026, 12:49:52 PM
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return [...args].length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */