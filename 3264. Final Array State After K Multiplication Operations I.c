/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* getFinalState(int* nums, int numsSize, int k, int multiplier, int* returnSize) {
    *returnSize = numsSize;
    int *newArr = (int*)malloc(sizeof(int)*numsSize);
    
    for(int i=0; i<k; i++){
        int min = 0;
        for(int j=1; j<numsSize; j++){
            if(nums[j] < nums[min]) min = j;
        }
        nums[min] *= multiplier;
    }

    newArr = nums;
    return newArr;
}
