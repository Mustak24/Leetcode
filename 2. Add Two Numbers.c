#include<stdlib.h>

struct ListNode {
    int val;
    struct ListNode *next;
};
struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {

    struct ListNode* head = NULL;
    int sum, carry = 0;

    while (l1 != NULL || l2 != NULL) {
        sum = carry;
        if(l1 != NULL){ 
            sum += l1->val;
            l1 = l1->next;
        }
        if(l2 != NULL){ 
            sum += l2->val;
            l2 = l2->next;
        }
        if (sum < 10)
            addNode(&head, sum);
        else {
            addNode(&head, sum % 10);
        }
        carry = sum / 10;
    }
    if(carry == 0) return head;
    addNode(&head, carry);
    return head;
}

void addNode(struct LinkNode **head, int val){
    struct ListNode *block = (struct ListNode*)malloc(sizeof(struct ListNode));
    block->val = val;
    block->next = NULL;
    if(*head == NULL){
        *head = block;
        return;
    }
    struct ListNode * temp = *head;
    while(temp->next != NULL) temp = temp->next;
    temp->next = block;
}