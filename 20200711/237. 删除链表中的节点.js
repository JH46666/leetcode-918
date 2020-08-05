/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next
};


head = [4, 5, 1, 9], node = 5


deleteNode(node);