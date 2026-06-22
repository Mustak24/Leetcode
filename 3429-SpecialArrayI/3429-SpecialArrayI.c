// Last updated: 6/22/2026, 12:49:08 PM
bool isArraySpecial(int* nums, int numsSize) {
    for(int i=0; i<numsSize-1; i++){
        if(!((nums[i]^nums[i+1])%2)){
            return false;
        }
    }
    return true;
}