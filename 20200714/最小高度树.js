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

/**
  * 
  * @param {*} nums 
  * 
  * 给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

       0 
      / \ 
    -3   9 
    /   / 
  -10  5 
  * 
  * 
  */


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var constructTree = function (nums) {
  if (!nums.length) return null
  var maxIndex = Math.floor((nums.length - 1) / 2)
  var root = new TreeNode(nums[maxIndex])

  var leftNode = constructTree(nums.slice(0, maxIndex))
  var rightNode = constructTree(nums.slice(maxIndex + 1))
  root.left = leftNode
  root.right = rightNode
  return root
}
var sortedArrayToBST = function (nums) {
  //构造二叉树
  return constructTree(nums)
  //根节点
}


// 这个用到深度优先遍历

var value = sortedArrayToBST([-10, -3, 0, 5, 9])
console.log('value: ', value);