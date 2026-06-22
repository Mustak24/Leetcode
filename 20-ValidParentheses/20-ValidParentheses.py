# Last updated: 6/22/2026, 12:54:56 PM
class Solution:
    def isValid(self, s: str) -> bool:
        ans = []
        obj = {
            '(':')',
            '[':']',
            '{':'}'
        }
        for i in s:
            if(i in ')]}'):
                if(len(ans)):
                    if(obj[ans.pop()] != i):
                        return False
                else: return False
            else: ans.append(i)
        return False if len(ans) else True