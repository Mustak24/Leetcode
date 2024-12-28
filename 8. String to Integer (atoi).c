int myAtoi(char* s) {
    long int ans = 0;
    long int max = 2147483647;
    long int min = -2147483648;

    // store ascii value of '0'.
    int zero = '0';
    
    // here sym value is 'u' mean undefine 'p' mean positive 'n' negetive.
    char sym = 'u';
    int start = 0;

    // for ingnore all starting spaces.
    while(s[start] == ' ') start++;

    for(int i=start; s[i] != '\0'; i++){

        // if non intiger values.
        if(s[i] - zero > 9) return sym == 'p' ? ans : -1*ans;
        
        // if value is 0 to 9.
        if(s[i] - zero > -1){         
            ans = ans*10 + (s[i] - zero);
            if(sym == 'u') sym = 'p';

            if(ans > max && sym == 'p') return max;
            if(-1*ans < min && sym == 'n') return min;

            continue;
        }
        
        // if non intiger values.
        if(sym != 'u') return sym == 'p' ? ans : -1*ans;

        if(s[i] == '+') sym = 'p';
        else if(s[i] == '-') sym = 'n';
        else return sym == 'p' ? ans : -1*ans;
    }

    return sym == 'p' ? ans : -1*ans;
}
