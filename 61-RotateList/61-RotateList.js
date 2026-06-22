// Last updated: 6/22/2026, 12:54:17 PM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head === null) return head;

    let size = 0;
    for(let temp = head; temp !== null; temp = temp.next) size++;
    
    k = k % size;
    if(k === 0 || size < 2) return head;

    let temp = head;
    for(let i=0; i<size - k - 1; i++) {
        temp = temp.next;
    }

    const newHead = temp.next;
    temp.next = null;

    temp = newHead;
    while(temp.next !== null) temp = temp.next;
    temp.next = head;

    return newHead;
};