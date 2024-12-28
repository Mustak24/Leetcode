double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    int maxLen = nums1Size + nums2Size;

    int temp[maxLen];
    int len = -1;
    
    int i=0, j=0;
    while(++len < maxLen){
        if(i == nums1Size){
            temp[len] = nums2[j++];
        } else if( j == nums2Size){
            temp[len] = nums1[i++];
        } else if(nums1[i] < nums2[j]){
            temp[len] = nums1[i++];
        } else {
            temp[len] = nums2[j++];
        }
    }

    return (double)(temp[maxLen/2] + temp[(maxLen-1)/2])/2;

}
