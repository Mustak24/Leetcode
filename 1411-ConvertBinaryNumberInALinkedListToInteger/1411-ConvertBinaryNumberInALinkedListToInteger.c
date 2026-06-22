// Last updated: 6/22/2026, 12:52:55 PM
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
int getDecimalValue(struct ListNode* head) {
    int ans = 0;
    
    struct ListNode* temp = head;
    while(temp != NULL) {
        ans *= 2;
        ans += temp->val;
        temp = temp -> next;
    }

    return ans;
}