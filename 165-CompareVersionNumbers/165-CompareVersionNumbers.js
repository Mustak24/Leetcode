// Last updated: 6/22/2026, 12:54:00 PM
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const v1 = version1.split('.').map(Number);
    const v2 = version2.split('.').map(Number);
    const l1 = v1.length, l2 = v2.length;

    let i = 0
    while(i < l1 && i < l2) {
        if(v1[i] < v2[i]) return -1;
        else if(v1[i] > v2[i]) return 1;
        i += 1;
    }

    while(i < l1) {
        if(v1[i] !== 0) return 1;
        i += 1;
    } 

    while(i < l2) {
        if(v2[i] !== 0) return -1;
        i += 1;
    }

    return 0;
};