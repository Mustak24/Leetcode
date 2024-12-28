int removeDuplicates(int* nums, int numsSize) {
    int info[2] = {nums[0], 1};
    for(int i=0; i<numsSize; i++){
        if(nums[i] != info[0]){
            nums[info[1]++] = nums[i];
            info[0] = nums[i];
        }
    }
    return info[1];
}
