class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
        nums = [nums[i] for i in range(len(nums)) if nums[i-1] != nums[i] ]
        for i in range(len(nums)-2):
            if nums[i] < nums[i+1] > nums[i+2] : return False
            elif nums[i] > nums[i+1] < nums[i+2] : return False
        return True