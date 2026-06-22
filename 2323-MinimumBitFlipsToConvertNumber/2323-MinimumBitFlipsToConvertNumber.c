// Last updated: 6/22/2026, 12:51:10 PM
int minBitFlips(int start, int goal) {
    start ^= goal;
    int ans = 0;
    for(start; start; start/=2) if(start%2) ans++;
    return ans;
}