// Last updated: 8/3/2026, 9:40:46 PM
1/**
2 * @param {number[]} nums
3 * @return {boolean}
4 */
5var canJump = function(nums) {
6    const wrongTurn = new Set();
7
8    function fn(index = 0) {
9        if(index >= nums.length) return false;
10        if(wrongTurn.has(index)) return false;
11        if(index === nums.length-1) return true;
12
13        for(let i=1; i<=nums[index]; i++) {
14            const result = fn(index + i);
15            if(result) return true;
16        }
17        
18        wrongTurn.add(index);
19        return false;
20    }
21
22    return fn();
23};