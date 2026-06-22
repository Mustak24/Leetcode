// Last updated: 6/22/2026, 12:54:16 PM
int mySqrt(int x) {
    if(x<2) return x;
    int start = 0;
    int end = x;
    while(true){
        long int mid = start/2+end/2;
        if(mid*mid < x && (mid+1)*(mid+1) > x) return mid;
        else if(mid*mid < x) start = mid+1;
        else if(mid*mid > x) end = mid;
        else return mid;
    }
}