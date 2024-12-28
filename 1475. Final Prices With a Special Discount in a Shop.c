/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* finalPrices(int* prices, int pricesSize, int* returnSize) {
    int *ans = (int*)malloc(sizeof(int)*pricesSize);
    *returnSize = pricesSize;

    for(int i=0; i<pricesSize; i++){
        ans[i] = prices[i];
        for(int j=i+1; j<pricesSize; j++){
            if(prices[j] <= prices[i]){
                ans[i] -= prices[j];
                break;
            }
        }
    }

    return ans;
}
