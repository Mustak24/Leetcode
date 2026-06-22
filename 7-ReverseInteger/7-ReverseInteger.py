# Last updated: 6/22/2026, 12:55:20 PM
class Solution:
    def reverse(self, x: int) -> int:
        if x < 0 :
            rev = -1*int(str(x)[-1:0:-1])
            return rev if -1*(2**31)<rev<2**31 else 0
        rev = int(str(x)[::-1])
        return rev if -1*(2**31)<rev<2**31 else 0
        