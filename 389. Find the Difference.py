class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        s = ''.join(sorted([i for i in s]))
        t = ''.join(sorted([i for i in t]))
        arr = []
        for i in range(len(t)):
            if not t[i] in s: return t[i]
            tempstr = [i for i in t]
            tempstr.pop(i)
            if(''.join(tempstr) == s): return t[i]
