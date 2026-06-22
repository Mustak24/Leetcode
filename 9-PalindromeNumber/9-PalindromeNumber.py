# Last updated: 6/22/2026, 12:55:11 PM
class Solution:
    def isPalindrome(self, x: int) -> bool:
        return False if x<0 else str(x)[::-1] == str(x)