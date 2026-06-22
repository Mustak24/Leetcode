# Last updated: 6/22/2026, 12:52:33 PM
class Solution:
    def maxScore(self, s: str) -> int:
        zero: int  = s[0] == '0'
        
        one: int = 0
        for i in s[1:]:
            if i == '1':
                one += 1

        max: int = one + zero

        for i in s[1:-1]:
            if i == '0':
                zero += 1
            else:
                one -= 1

            if max < zero + one:
                max = zero + one

        return max
        