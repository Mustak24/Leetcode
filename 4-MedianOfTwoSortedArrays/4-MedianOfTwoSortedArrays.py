# Last updated: 6/22/2026, 12:55:25 PM
class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        nums = sorted(nums1 + nums2)
        length = len(nums)
        if length % 2 == 1: return nums[int(length/2)]
        return (nums[int(length/2)] + nums[int(length/2)-1])/2