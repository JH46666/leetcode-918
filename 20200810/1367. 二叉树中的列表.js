/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
  let queue = [], ans = false, arr = [];
  
  if (root === null || head === null) return false;
  
  while (head && head.val) {
    arr.push( head.val );
    head = head.next;
  }
  
  queue.push( root );
  
  while (queue.length > 0 && ans === false) {
    let size = queue.length;
    while (size > 0) {
      let offer = queue.shift();
      
      if (offer.val === arr[0]) dfs([], offer);
      if (offer.left) queue.push( offer.left );
      if (offer.right) queue.push( offer.right );
      
      size--;
    }
  }
    
  function dfs(curr, node) {
    if (node) {
      curr.push( node.val );
    } else {
      return ;
    }
    
    if (curr.length === arr.length) {
      return ans = true;
    }
    
    let len = curr.length;
    if (node.left && node.left.val === arr[len]) {
      dfs(JSON.parse(JSON.stringify( curr )), node.left);
    }
    if (node.right && node.right.val === arr[len]) {
      dfs(JSON.parse(JSON.stringify( curr )), node.right);
    }
  }
  
  return ans;
};
/**
 * 
 * 
 * 给你一棵以 root 为根的二叉树和一个 head 为第一个节点的链表。

如果在二叉树中，存在一条一直向下的路径，且每个点的数值恰好一一对应以 head 为首的链表中每个节点的值，那么请你返回 True ，否则返回 False 。

一直向下的路径的意思是：从树中某个节点开始，一直连续向下的路径。

 */