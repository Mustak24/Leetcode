// Last updated: 6/22/2026, 12:53:12 PM
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let ans = [];
    let temp = []
    for (let i = 0; i < arr2.length; i++) {
        ans = ans.concat(arr1.filter((x) => {
            return x === arr2[i]
        }))
    }
    temp = temp.concat(arr1.filter(x => !arr2.includes(x))).sort((a,b)=>a-b)
    return ans.concat(temp)
};