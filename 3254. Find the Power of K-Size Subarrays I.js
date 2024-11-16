/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var resultsArray = function(nums, k) {
    let ans = [];
    for(let i=0; i<nums.length-k+1; i++){
        let tempArr = [];
        for(let j=i; j<i+k; j++){
            tempArr.push(nums[j])
        }
        ans.push(isValidArr(tempArr));
    }
    return ans;
};


function isValidArr(arr){
    for(let i=0; i<arr.length-1; i++)
        if(arr[i+1] - arr[i] - 1) return -1;
    return arr[arr.length-1];
}
