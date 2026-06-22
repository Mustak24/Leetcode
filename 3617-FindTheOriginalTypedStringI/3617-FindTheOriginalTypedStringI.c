// Last updated: 6/22/2026, 12:48:47 PM
int possibleStringCount(char* word) {
    int count = 1;
    int index = 1;
    while(word[index] != '\0'){
        if(word[index] == word[index-1]) count++;
        index++;
    }

    return count;
}