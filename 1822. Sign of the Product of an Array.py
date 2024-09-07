class Solution:
    def arraySign(self, nums: List[int]) -> int:
        sum = 1
        for num in nums:
            sum *= num
        if sum == 0 : return sum
        return -1 if sum < 0 else 1