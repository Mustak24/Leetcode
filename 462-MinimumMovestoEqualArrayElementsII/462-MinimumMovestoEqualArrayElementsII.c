// Last updated: 11/2/2026, 11:57:29 AM
1int compareInt(const void* a, const void* b) {
2    return *(const int*)a - *(const int*)b;
3}
4
5int minMoves2(int* nums, int numsSize) {
6    qsort(nums, numsSize, sizeof(int), compareInt);
7
8    int mid = numsSize % 2 == 0 ? (
9        (nums[numsSize/2] + nums[numsSize/2]) / 2
10    ) : (
11        nums[numsSize / 2]
12    );
13
14    int steps = 0;
15    for(int index = 0; index < numsSize; index++) {
16        steps += abs(nums[index] - mid);
17    }
18
19    return steps;
20}