// Last updated: 6/22/2026, 12:50:17 PM
/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let obj = {}
    for(let i=0; i<this.length; i++){
        if(!Object.hasOwn(obj, fn(this[i])))
            obj[`${fn(this[i])}`] = [this[i]]
        else
            obj[`${fn(this[i])}`].push(this[i])
    }
    return obj
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */