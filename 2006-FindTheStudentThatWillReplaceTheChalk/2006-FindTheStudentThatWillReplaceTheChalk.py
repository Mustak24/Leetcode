# Last updated: 6/22/2026, 12:51:44 PM
class Solution:
    def chalkReplacer(self, chalk: List[int], k: int) -> int:
        k %= sum(chalk)
        for i in range(len(chalk)):
            if((k:=(k-chalk[i]))<0): return i