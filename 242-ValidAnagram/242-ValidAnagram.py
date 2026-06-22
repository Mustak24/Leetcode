# Last updated: 6/22/2026, 12:53:57 PM
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return ''.join(sorted([i for i in s])) == ''.join(sorted([i for i in t]))