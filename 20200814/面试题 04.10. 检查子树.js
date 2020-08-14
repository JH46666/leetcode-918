/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {boolean}
 */
var checkSubTree = function(t1, t2) {
  function check(t1,t2){
      if(!t1&&!t2) return true
      if(!t1||!t2) return false
      if(t1.val!==t2.val) return false
      return check(t1.left,t2.left)&&check(t2.right,t2.right)
  }
  let isSame=false
  function helper(root){
      if(isSame) return 
      if(!root) return
      if(root.val===t2.val&&check(root,t2)){
          isSame=true
          return
      }
      helper(root.left)
      helper(root.right)
  }
  helper(t1)
  return isSame
};