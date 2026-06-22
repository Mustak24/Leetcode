// Last updated: 6/22/2026, 12:54:46 PM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head === null || head.next === null) return head;
    
    const swap = (head) => {
        const temp1 = head.next;
        const temp2 = head.next.next;

        temp1.next = temp2.next;
        temp2.next = temp1;
        head.next = temp2;
    }

    let list = {val: 0, next: head};
    let temp = list;

    while(temp) {
        if(temp.next === null || temp.next.next === null) break;

        swap(temp);
        temp = temp.next.next;
    }

    return list.next;
};