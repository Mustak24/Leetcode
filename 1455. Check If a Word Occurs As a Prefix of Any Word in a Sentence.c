
bool isPrefix(char* sen, char* pre){
    for(int i=0; pre[i] != '\0'; i++){
        if(sen[i] != pre[i]) return false;
    }
    return true;
}


int isPrefixOfWord(char* sentence, char* searchWord) {
    if(isPrefix(sentence, searchWord)) return 1;
    
    int ans = 2;
    for(int i=0; sentence[i] != '\0'; i++){
        if(sentence[i] == ' '){
            if(isPrefix((sentence + i + 1), searchWord)) {
                return ans;
            }
            ans++;
        }
    }
    
    return -1;
}
