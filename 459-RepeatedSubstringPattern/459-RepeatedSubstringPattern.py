# Last updated: 6/22/2026, 12:53:44 PM
class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
        for i in range(1,int(len(s)/2)+1):
            subStr = s[0:i]
            if(s.count(subStr)*len(subStr) == len(s)):
                return True
        return False