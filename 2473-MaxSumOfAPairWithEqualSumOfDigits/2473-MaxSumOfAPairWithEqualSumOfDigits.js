// Last updated: 6/22/2026, 12:50:59 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    let obj = {};
    for(let i=0; i<nums.length; i++){
        let sum = digitsSum(nums[i]);
        if(sum in obj) obj[sum].push(nums[i]);
        else obj[sum] = [nums[i]];
    }

    let maxSum = 0;
    for(let key in obj){
        if(obj[key].length < 2) continue;
        let arr = obj[key];
        for(let i=0; i<2; i++){
            let max = i;
            for(let j=i+1; j<arr.length; j++){
                if(arr[max] < arr[j]) max = j;
            }
            let temp = arr[i];
            arr[i] = arr[max];
            arr[max] = temp;
        }
        if(maxSum < arr[0]+arr[1]) maxSum = arr[0] + arr[1];
    }

    return maxSum == 0 ? -1 : maxSum;
};

function digitsSum(num){
    let sum = 0;
    while(num){
        sum += num%10;
        num = Math.floor(num/10);
    }
    return sum;
}