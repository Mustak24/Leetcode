# Last updated: 6/22/2026, 12:51:37 PM
class Solution:
    def getLucky(self, s: str, k: int) -> int:
        alp = '_abcdefghijklmnopqrstuvwxyz'
        s = ''.join([str(alp.index(i)) for i in s])
        for i in range(k):
            s = str(sum([int(i) for i in s]))
        return int(s)