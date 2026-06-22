// Last updated: 6/22/2026, 12:50:06 PM
var TimeLimitedCache = function() {
    this.cache = {}
    this.timeout = {}
    this.cacheCount = 0;
    return null
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let have = Boolean(this.cache[key])

    if(have) clearTimeout(this.timeout[key]);
    
    this.cache[key] = value;
    this.cacheCount += !have;
    
    this.timeout[key] = setTimeout(()=>{
        delete this.cache[key];
        this.cacheCount -= 1;
    }, duration);
    return have;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    return this.cache[key] || -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.cacheCount;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */