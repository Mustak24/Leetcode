// Last updated: 6/22/2026, 12:54:58 PM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let fast = head, slow = head;

    for(let i=0; i<n; i++) fast = fast.next;

    if(fast === null) {
        head = head.next;
        return head;
    }

    while(fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;
    
    return head;
};