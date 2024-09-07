class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        ans = ['' for i in range(2*len(word1) + 2*len(word2))]
        for i in range(len(word1)): 
            ans[2*i] = word1[i]
        for i in range(len(word2)):
            ans[2*i + 1] = word2[i]
        
        return ''.join(ans)