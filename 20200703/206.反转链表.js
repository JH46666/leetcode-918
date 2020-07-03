/* ### [206\. 反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)

Difficulty: **简单**


反转一个单链表。

**示例:**

```
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

**进阶:**  
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？


#### Solution

Language: **全部题目**

```全部题目

``` */


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
var reverseList = function(head) {
  var len = head.length;
  if(len <= 0 ) return 0;
  const num =head.reverse();
  return num
};

// 1->2->3->4->5->NULL

// 5->4->3->2->1->NULL

const head = [1,2,3,4,5];
var value = reverseList(head)
console.log('value: ', value);

