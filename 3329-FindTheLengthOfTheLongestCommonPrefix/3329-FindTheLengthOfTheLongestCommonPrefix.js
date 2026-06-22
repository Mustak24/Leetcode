// Last updated: 6/22/2026, 12:49:25 PM
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    const prefixTree1 = {};
    const prefixTree2 = {};

    const add = (node, num) => {
        num = num.toString();
        let temp = node;
        for(let n of num) {
            if(!temp[n]) temp[n] = {};
            temp = temp[n];
        }
    }

    const has = (node, num) => {
        num = num.toString();
        let temp = node;
        for(let i=0; i<num.length; i++) {
            if(!temp[num[i]]) return i;
            temp = temp[num[i]];
        }
        return num.length;
    }

    for(let num of arr1) {
        add(prefixTree1, num);
    }

    let max = 0;
    for(let num of arr2) {
        add(prefixTree2, num);
        max = Math.max(has(prefixTree1, num), max);
    }

    for(let num of arr1) {
        max = Math.max(has(prefixTree2, num), max);
    }

    return max;
};