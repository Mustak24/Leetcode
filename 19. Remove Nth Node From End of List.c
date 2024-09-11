#include<stdlib.h>

struct ListNode {
    int val;
    struct ListNode *next;
};


struct ListNode* removeNthFromEnd(struct ListNode* head, int n) {
    if(head->next == NULL){ 
        head = NULL;
        return head;
    }
    struct ListNode *temp = head;
    struct ListNode *temp1 = temp;
    while(temp1->next != NULL){
        temp1 = temp;
        for(int i=0; i<n; i++){
            temp1 = temp1->next;
        }
        if(temp1 == NULL){
            head = temp->next;
            return head;
        }
        if(temp1->next != NULL){
            temp = temp->next;
        } else{
            temp->next = temp->next->next;
        }
    }
    return head;

}