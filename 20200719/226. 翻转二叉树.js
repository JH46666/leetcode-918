/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if(!root) return null
  
  var right = invertTree(root.right);
  var left = invertTree(root.left);
  root.left = right
  root.right = left

  return root
};

//解法二 dfs 栈
var invertTree = function(root) {
  let stack = [root];
  while(stack.length > 0){
      let cur = stack.pop();
      if(cur === null) continue;
      [cur.left,cur.right] = [cur.right,cur.left];
      stack.push(cur.right);
      stack.push(cur.left);
  }
  return root;
};



// 解法三  bfc 队
var invertTree = function(root) {
  let queue = [root];
  while(queue.length > 0){
      let cur = queue.pop();
      if(cur === null) continue;
      [cur.left,cur.right] = [cur.right,cur.left];
      queue.unshift(cur.left);
      queue.unshift(cur.right);
  }
  return root;
};

















