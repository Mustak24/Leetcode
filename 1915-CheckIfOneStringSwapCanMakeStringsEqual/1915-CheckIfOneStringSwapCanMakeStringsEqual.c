// Last updated: 6/22/2026, 12:51:56 PM
bool areAlmostEqual(char* s1, char* s2) {
    char temp[2][3];
    int count = 0;
    for(int i=0; s1[i] != '\0'; i++){
        if(s1[i] != s2[i]){
            if(count == 2) return false;
            temp[0][count] = s1[i];
            temp[1][count] = s2[i];
            count++;
        }
    }
    return (temp[0][0] == temp[1][1] && temp[0][1] == temp[1][0]);
}