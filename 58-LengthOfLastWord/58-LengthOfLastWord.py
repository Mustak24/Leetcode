# Last updated: 6/22/2026, 12:54:22 PM
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        arr = s.strip().split()
        return len(arr[len(arr)-1])