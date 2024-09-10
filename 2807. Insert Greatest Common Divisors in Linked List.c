#include <stdio.h>
#include<stdlib.h>

//   Definition for singly-linked list.
struct ListNode {
    int val;
    struct ListNode *next;
};
 
struct ListNode* insertGreatestCommonDivisors(struct ListNode* head){
    struct ListNode* temp = head;
    int tempNum, tempNum1, smallNum, bigNum;
    while(temp->next != NULL){
        if(temp->val < temp->next->val){ 
            smallNum = temp->val;
            bigNum = temp->next->val;
        }
        else{ 
            smallNum = temp->next->val;
            bigNum = temp->val;
        }
        tempNum = smallNum;

        while(bigNum%tempNum != 0 || smallNum%tempNum != 0){
            tempNum--;
        }

        struct ListNode* newNode = (struct ListNode*)malloc(sizeof(struct ListNode));
        newNode->val = tempNum;
        newNode->next = temp->next;

        temp->next = newNode;
        temp = temp->next->next;
    } 
    return head;
}