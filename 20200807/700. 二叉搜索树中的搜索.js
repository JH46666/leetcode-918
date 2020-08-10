/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if(!root) return null;
    
  if(root.val == val ){
    return  root
  }
    
  return searchBST(root.left, val) ||  searchBST(root.right, val)
};


var searchBST = function(root, val) {
  // 递归
  if (!root) return null;
  if (root.val === val) return root;
  else if (root.val > val) return searchBST(root.left, val);
  else  return searchBST(root.right, val);

}
var arr = [4,2,7,1,3];
var num = 2;

var val = searchBST(arr, num)
console.log('val: ', val);




