class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        for i in range(nums.count(0)):
            for j in range(nums.index(0), len(nums)):
                if(nums[j] == 0):
                    nums.append(nums.pop(j))
                    break
                
        return nums