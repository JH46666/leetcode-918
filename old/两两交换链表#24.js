/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  var next = this.next;
  this.next = this.val
  this.val = next;
};



/*
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

 

示例:

给定 1->2->3->4, 你应该返回 2->1->4->3.

*/

/**
 * 
 * 
 * analyze

prev  first  second  next
        1  ->  2  ->  3  ->  4 -> null
              .
              .
进行如下指针变换:
prev -> second -> first -> next
          2    ->   1   ->  3  ->  4 -> null
              .
              .
移动指针:
                    prev   first  second  next
          2    ->   1   ->  3  ->  4 -> null
              .
              .
重复上述操作


 */
var swapPairs = function(head) {
  const dummyHead = new ListNode(0)
  dummyHead.next = head

  let prev = dummyHead
  let first = prev.next

  while(first && first.next) {
    let second = first.next
    let next = second.next

    second.next = first
    first.next = next
    prev.next = second

    prev = first
    first = first.next
  }

  return dummyHead.next
}


