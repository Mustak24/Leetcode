# Last updated: 6/22/2026, 12:52:24 PM
class Solution:
    def kthFactor(self, n: int, k: int) -> int:
        facter = [i for i in range(1,n+1) if(n%i == 0)]
        return facter[k-1] if len(facter) >= k else -1