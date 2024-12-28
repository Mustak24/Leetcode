int lengthOfLongestSubstring(char* s) {
    if(s[0] == '\0') return 0;
    
    int maxLen = 0;
    int temp = 0;
    
    int i = 1;
    for(i; s[i] != '\0'; i++){
        for(int j=temp; j<i; j++){
            if(s[i] == s[j]){
                if(i - temp > maxLen){
                    maxLen = i - temp;
                }
                temp = j+1;
                i = temp;
            }
        }
    }
    if(i - temp > maxLen){
        maxLen = i - temp;
    }
    return maxLen;
}
