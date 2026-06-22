// Last updated: 6/22/2026, 12:51:03 PM
bool isCircularSentence(char* sentence) {
    int i=0;
    for(i; sentence[i] != '\0'; i++){
        if((sentence[i] != ' ')) continue;
        if(sentence[i-1] != sentence[i+1]) return false;
    }
    return (sentence[0] == sentence[i - 1]);
}