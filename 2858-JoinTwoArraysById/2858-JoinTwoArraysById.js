// Last updated: 6/22/2026, 12:49:49 PM
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let newArr = arr1.concat(arr2)
    let obj = {}
    for(let i=0; i<newArr.length; i++){
        if(! Object.hasOwn(obj, newArr[i].id))
            obj[`${newArr[i].id}`] = newArr[i]
        else{
            Object.keys(newArr[i]).map((e)=>{
                obj[`${newArr[i].id}`][e] = newArr[i][e]
            })
        }
    }
    return Object.values(obj)
};