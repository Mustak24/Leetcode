// Last updated: 6/22/2026, 12:52:11 PM
bool check(int* nums, int numsSize) {
    int firstNum = nums[0];
    int i;
    for(i=0; i<numsSize-1; i++){
        if(nums[i] > nums[i+1]) break;
    }
    for(++i; i<numsSize; i++){
        if(nums[i] > firstNum) return false;
        
        if(i == numsSize-1) continue;
        if(nums[i] > nums[i+1]) return false;
    }
    return true;
}