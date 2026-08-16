// Last updated: 8/16/2026, 4:40:01 PM
1/**
2 * Definition for singly-linked list.
3 * function ListNode(val, next) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.next = (next===undefined ? null : next)
6 * }
7 */
8/**
9 * @param {ListNode} l1
10 * @param {ListNode} l2
11 * @return {ListNode}
12 */
13var addTwoNumbers = function(l1, l2) {
14    const ans = {val: null, next: null};
15
16    let temp = ans, c = 0;
17
18    while(l1 || l2) {
19        const a = l1 === null ? 0 : l1.val;
20        const b = l2 === null ? 0 : l2.val;
21        if(l1 !== null) l1 = l1.next;
22        if(l2 !== null) l2 = l2.next;
23
24        const sum = a + b + c;
25        const val = sum % 10;
26        c = sum > 9 ? 1 : 0;
27
28        temp.next = { val, next: null } 
29        temp = temp.next;               
30    }
31
32    if(c === 1) {
33        temp.next = {val: 1, next: null};
34    }
35
36    return ans.next;
37};
38