// Last updated: 11/22/2026, 12:52:46 PM
1bool checkString(char* s) {
2    bool hasB = false;
3
4    for(const char* ch = s; *ch != '\0'; ch++) {
5        if(*ch == 'a' && hasB) return false;
6        if(*ch == 'b') hasB = true;
7    }
8
9    return true;
10}