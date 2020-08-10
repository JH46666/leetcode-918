/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if(!p && !p) return true;
  if(!p || !q) return false;

  if(p.val != q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

};

// ![dfs](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghiab74ekuj30nm0n4q3m.jpg)

var isSameTree = function(p, q) {
  if(p == null && q == null) 
      return true;
  if(p == null || q == null) 
      return false;
  if(p.val != q.val) 
      return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
