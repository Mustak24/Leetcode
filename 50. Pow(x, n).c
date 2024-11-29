double myPow(double x, int n) {
    if(n == 0) return 1;
    if(n%2) return (n>0 ? x : (1/x))*myPow(x, (n>0 ? n-1 : n+1));
    return myPow(x*x, n/2);
}
