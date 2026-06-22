// Last updated: 6/22/2026, 12:50:28 PM
/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let ans = 0;
    for(let i=0; i<details.length; i++){
            if(parseInt(details[i].slice(-4,-2)) > 60)
                ans++ 
    }
    return ans
};