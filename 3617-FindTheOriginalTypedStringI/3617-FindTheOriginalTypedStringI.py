# Last updated: 6/22/2026, 12:48:42 PM
class Solution:
    def possibleStringCount(self, word: str) -> int:
        count = 1
        length = len(word)
        for i in range(1, length):
            if word[i-1] == word[i] :
                count += 1
        return count