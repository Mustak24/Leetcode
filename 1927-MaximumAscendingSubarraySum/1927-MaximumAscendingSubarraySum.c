// Last updated: 6/22/2026, 12:51:54 PM
int maxAscendingSum(int* nums, int numsSize) {
    int maxSum = 0;
    int temp = nums[0];
    for(int i=0; i<numsSize-1; i++){
        if(maxSum < temp){
            maxSum = temp;
        }
        if(nums[i] < nums[i+1]) temp += nums[i+1];
        else temp = nums[i+1];
    }

    return maxSum < temp ? temp : maxSum;
}