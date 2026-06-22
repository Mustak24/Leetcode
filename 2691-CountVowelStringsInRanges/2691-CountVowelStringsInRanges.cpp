// Last updated: 6/22/2026, 12:50:38 PM
class Solution {
public:
    vector<int> vowelStrings(vector<string>& words, vector<vector<int>>& queries) {
        int *vowelCount  = new int[words.size()];
        int temp = 0;
        for(int i=0; i<words.size(); i++){
            vowelCount[i] = isValidVowelString(words[i]) ? ++temp : temp;
        }

        vector<int> ans;
        for(int i=0; i<queries.size(); i++){
          ans.push_back(vowelCount[queries[i][1]] - (queries[i][0] ? vowelCount[queries[i][0]-1] : 0));  
        }
        delete[] vowelCount;

        return ans;
    }

    bool isValidVowelString(string str){
        char vowels[6] = "aeiou";
        bool start = false, end = false;
        for(int i=0; i<5; i++){
            if(str[0] == vowels[i]) start = true;
            if(str[str.size()-1] == vowels[i]) end = true;
        }
        return start && end;
    }
};