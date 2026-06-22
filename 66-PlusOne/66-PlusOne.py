# Last updated: 6/22/2026, 12:54:26 PM
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        num = int(''.join([str(i) for i in digits])) + 1
        return [int(i) for i in str(num)]
