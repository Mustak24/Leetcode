// Last updated: 6/22/2026, 12:48:53 PM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    const numSet = new Set(nums);

    while(numSet.has(head.val)) {
        head = head.next;
    }

    let temp = head;

    while(temp.next !== null) {
        if(numSet.has(temp.next.val)) {
            temp.next = temp.next?.next ?? null;
        } else {
            temp = temp.next;
        }
    }

    return head;
};