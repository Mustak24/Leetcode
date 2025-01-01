int maxScore(char* s) {
    int zero = s[0] == '0';
    
    int one = 0;
    for(int i=1; s[i] != '\0'; i++){
        if(s[i] == '1') one++;
    }

    int max = zero+one;
    for(int i=1; s[i+1] != '\0'; i++){
        s[i] == '0' ? zero++ : one--;
        if(max < zero+one){
            max = zero + one;
        }
    }

    return max;
}
