/**
 * Definition for a binary tree node.
 * function Node(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {Node} root
 * @return {number}
 */

function BinaryTree() {

  var Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };


  //新增节点
  var insertNode = function (node, newNode) {
    //约定右孩子都大于左孩子节点
    if (newNode.key < node.key) {
      if (node.left === null) { //没有左孩子，则新增左孩子
        node.left = newNode;
      } else {
        //如果有左孩子则递归算法实现插入左孩子节点
        insertNode(node.left, newNode);
      }
    } else {
      //如果有孩子为null，则新增右孩子
      if (node.right === null) {
        node.right = newNode;
      } else {
        //如果有左孩子则递归算法实现插入右孩子节点
        insertNode(node.right, newNode);
      }
    }
  };

  // 插入新节点
  this.insert = function (key) {
    //创建节点
    var node = new Node(key);
    if (root === null) { //判断是否为根节点
      root = node;
    } else {
      // 不是根节点则新增节点
      insertNode(root, node);
    }
  };

  this.maxDepth = function (root) {
    if(root === null){
      return 0
    } else {
      return max(maxDepth(root.left), maxDepth(root.right)) + 1
    }
  };
}
//构建排序二叉树 

var nodes = [3, 9, 20, null, null, 15, 7];
var binaryTree = new BinaryTree();
nodes.forEach(function (key) {
  binaryTree.insert(key);
});
binaryTree.maxDepth()


// leetcode 解析

/* 后序遍历（DFS）
树的后序遍历 / 深度优先搜索往往利用 递归 或 栈 实现，本文使用递归实现。
关键点： 此树的深度和其左（右）子树的深度之间的关系。显然，此树的深度 等于 左子树的深度 与 右子树的深度 中的 最大值 +1+1 。 */





/* 层序遍历（BFS）
树的层序遍历 / 广度优先搜索往往利用 队列 实现。
关键点： 每遍历一层，则计数器 +1+1 ，直到遍历完成，则可得到树的深度。 */

var maxDepth = function (root) {
  if(root === null) return 0
  var queue = [root], res = 0;
  while(queue.length){
    let tmp = []
    for(let node of queue.values()) {
      if( node.left  )  tmp.push(node.left)
      if( node.right )  tmp.push(node.right)
    }
    queue = tmp
    res += 1
  }
  return res
}