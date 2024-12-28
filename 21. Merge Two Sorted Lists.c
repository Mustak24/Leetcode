/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

 void addNode(struct ListNode** head, int val){
    struct ListNode* node = (struct ListNode*)malloc(sizeof(struct ListNode));
    node->val = val;
    node->next = NULL;
    
    if(*head == NULL){
        *head = node;
        return;
    }

    struct ListNode* temp = *head;
    while(temp->next) temp = temp->next;

    temp->next = node;
}


struct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2) {
    struct ListNode* head = NULL;

    while(list1 || list2){
        if(!list1){
            addNode(&head, list2->val);
            list2 = list2->next;
        } else if(!list2){
            addNode(&head, list1->val);
            list1 = list1->next;
        } else if(list1->val < list2->val){
            addNode(&head, list1->val);
            list1 = list1->next;
        } else {
            addNode(&head, list2->val);
            list2 = list2->next;
        }
    }
    return head;
}
