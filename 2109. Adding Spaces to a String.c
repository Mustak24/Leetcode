char* addSpaces(char* s, int* spaces, int spacesSize) {
    int size = 0;
    while(s[size] != '\0') size++;

    char *ans = (char*)malloc(sizeof(char)*(size + spacesSize + 1));
    ans[size + spacesSize] = '\0';

    int j=0;
    for(int i=0; s[i] != '\0'; i++){
        if(j < spacesSize && i == spaces[j]){
            ans[i + j++] = ' ';
        }
        ans[i + j] = s[i];
    }

    return ans;
}
