# Last updated: 6/22/2026, 12:50:50 PM
class Solution:
    def isCircularSentence(self, sentence: str) -> bool:
        if(sentence[0] != sentence[-1]): return False
        for i in range(len(sentence)):
            if (sentence[i] == ' ') and not(sentence[i-1] == sentence[i+1]): return False
        return True