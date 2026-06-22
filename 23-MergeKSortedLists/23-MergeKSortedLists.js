// Last updated: 6/22/2026, 12:54:49 PM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

class List{
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(val) {
        if(this.head === null) {
            this.head = {val, next: null};
            this.tail = this.head;
            return;
        }

        this.tail.next = {val, next: null};
        this.tail = this.tail.next;
    } 

    getList(){
        return this.head;
    }
}

var mergeKLists = function(lists) {
    if(lists.length === 0) return null;

    let ans = lists.pop();
    while(lists.length !== 0) {
        let l1 = lists.pop();
        let l2 = ans;

        let result = new List();

        while(l1 && l2) {
            if(l1.val <= l2.val) {
                result.add(l1.val)
                l1 = l1.next;
            } else {
                result.add(l2.val);
                l2 = l2.next;
            }
        }

        while(l1) {result.add(l1.val); l1 = l1.next;}
        while(l2) {result.add(l2.val); l2 = l2.next;}

        ans = result.getList();
    }

    return ans;
};