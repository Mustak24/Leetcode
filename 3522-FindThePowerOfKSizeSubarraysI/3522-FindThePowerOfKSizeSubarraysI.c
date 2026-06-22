// Last updated: 6/22/2026, 12:48:58 PM
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* resultsArray(int* nums, int numsSize, int k, int* returnSize) {
    *returnSize = numsSize-k+1;
    int *ans = (int*)malloc((*returnSize)*sizeof(int));
    for(int i=0; i<numsSize-k+1; i++){
        int j=i;
        for(j; j<i+k-1; j++){
            if(nums[j+1] - nums[j] - 1){
                ans[i] = -1;
                break;
            }
        }
        if(j == k+i-1) ans[i] = nums[j];
    }
    return ans;
}