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

function Node(element) {
  this.element = element;   //当前节点的元素
  this.next = null;         //下一个节点链接
}


function LList (item) {
  this.head = new Node( item );     //头节点
  this.find = find;                   //查找节点
  this.insert = insert;               //插入节点
  this.display = display;             //显示链表
}
function find ( item ) {
  var currNode = this.head;
  while ( currNode.next != item ){
      currNode = currNode.next;
  }
  return currNode;
}


function insert ( newElement , item ) {
  var newNode = new Node( newElement );
  var currNode = this.find( item );
  newNode.next = currNode.next;
  currNode.next = newNode;
}


function display () {
  var currNode = this.head;
  while ( !(currNode.next == null) ){
      currNode = currNode.next;
  }
}
const convertBiNode = function(root) {
  const arr = root.sort()
  console.log('arr: ', arr);

  const arr1 = [];
  for(let i =0; i< arr.length;i++){
    if(arr[i]!=null){
      arr1.push(arr[i], null)
    }
  }
  return arr1.slice(0, arr1.length-1)
};

var tree = [4,2,5,1,3,null,6,0];
var list = convertBiNode(tree);
console.log('list: ', list);


/* 
输入： [4,2,5,1,3,null,6,0]
输出： [0,null,1,null,2,null,3,null,4,null,5,null,6]
 */

var convertBiNode = function(root) {
  let ans = new TreeNode(null), p = ans;
  
  function bst(node) {
    if (node === null) return ;
    bst(node.left);
    p.right = new TreeNode(node.val);
    p.left = null;
    p = p.right;
    bst(node.right);
  }
  
  bst(root);
  
  return ans.right;
};
