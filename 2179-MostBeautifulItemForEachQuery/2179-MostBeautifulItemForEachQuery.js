// Last updated: 6/22/2026, 12:51:28 PM
/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function(items, queries) {
    items = items.sort((a, b) => a[0] - b[0])
    let max = items[0][1]
    let map = {}
    for(let i=0; i<items.length; i++){
        if(max < items[i][1]) max = items[i][1];
        if(!(items[i][0] in map)) map[items[i][0]] = max;
        else if(max > map[items[i][0]]) map[items[i][0]] = max;
    }

    let objKeys = Object.keys(map)

    let ans = []

    for(let i=0; i<queries.length; i++){
        if(queries[i] in map) ans.push(map[queries[i]])
        else {
            let key = binarySearch(objKeys, queries[i])
            ans.push(map[key] || 0)
        }
    }

    return ans
};

function binarySearch(arr, key){
    if(key > arr[arr.length-1]) return arr[arr.length-1]
    let left = 0;
    let right = arr.length-1
    while(left+1 < right){
        let mid = parseInt((left+right)/2)
        if(arr[mid] == key) return key;
        else if(arr[mid] > key){
            right = mid
        } else {
            left = mid
        }
    }
    if(arr[left] <= key) return arr[left]
}