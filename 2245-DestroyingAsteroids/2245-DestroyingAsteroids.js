// Last updated: 6/22/2026, 12:51:20 PM
/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    asteroids.sort((a, b) => a - b);
    
    for(let asteroid of asteroids) {
        if(mass < asteroid) return false;
        mass += asteroid;
    }

    return true;
};