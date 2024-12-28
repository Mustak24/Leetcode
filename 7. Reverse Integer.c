int reverse(int x){
    if(!(-2147483649 < x && x < 2147483648)) return 0;

    long int ans = 0;
    while(x){
        int rem = x%10;
        x /= 10;
        ans *= 10;
        ans += rem;
    }
    
    if(-2147483649 < ans && ans < 2147483648) return ans;
    return 0;
}
