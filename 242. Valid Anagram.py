class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return ''.join(sorted([i for i in s])) == ''.join(sorted([i for i in t]))