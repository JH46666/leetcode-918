/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  const maxVal = Math.max(...nums);
  // 节点结构
  var Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };
  arrSimple2.sort(function(a,b){
      return b-a;
  });
  //根节点
  var root = null;


  // 为了保持平衡 所以 必须 左右取反

  var insertLeftNode = function (node, newNode) {
    //约定右孩子都大于左孩子节点
    if (newNode.key < node.key) {
      if (node.left === null) { //没有左孩子，则新增左孩子
        node.left = newNode;
      } else {
        //如果有左孩子则递归算法实现插入左孩子节点
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

  var insetRightNode = function (node, newNode) {
    insertNode(node.left, newNode);
  }
  // 之后一直生成最大二叉树


  // 插入新节点
  this.insert = function (key) {
    //创建节点
    var node = new Node(key);
    if (root === null) { //判断是否为根节点
      root = node;
    } else {
      // 不是根节点则新增节点
      Node(root, node);
    }
  };


  var binaryTree = new BinaryTree();
  binaryTree.insert(maxVal);

  var leftTree = new BinaryTree();
  var rightTree = new BinaryTree();

  leftArr.forEach(element => {
    leftTree.insert(element)
  });

  rightArr.forEach(element => {
    rightTree.insert(element)
  });

  // 这边想到的思路是 每次都求出 最大数字

  //左边就一直放右边

  //右边就一直放左边
};




var constructMaximumBinaryTree = function(nums) {
  return constructTree(nums, 0, nums.length - 1)
};


function constructTree(nums, l, r) {
  if(l == r) {
      var root = new TreeNode(nums[l])
      return root
  }

  var maxIndex = getMaxIndex(nums, l, r)
  var root = new TreeNode(nums[maxIndex])
  if(maxIndex == l) {
      var rightNode = constructTree(nums, l + 1, r)
      root.right = rightNode
      return root
  } else if(maxIndex == r) {
      var leftNode = constructTree(nums, l, r - 1)
      root.left = leftNode
      return root
  }

  var leftNode = constructTree(nums, l, maxIndex - 1)
  var rightNode = constructTree(nums, maxIndex + 1, r)
  root.left = leftNode
  root.right = rightNode

  return root
}


// 取的是下标
function getMaxIndex(nums, l, r) {
  var maxIndex = l
  for(var i = l;i <= r;i++) {
    if(nums[i] > nums[maxIndex]) {
        maxIndex = i
    }
  }
  console.log('maxIndex', maxIndex)
  return maxIndex
}


// 什么叫最大二叉树
var value = constructMaximumBinaryTree([3,2,1,6,0,5])

console.log('value: ', value);