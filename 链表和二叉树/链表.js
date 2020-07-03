//节点
function Node(element) {
  this.element = element;   //当前节点的元素
  this.next = null;         //下一个节点链接
}


//链表类
function LList () {
  this.head = new Node( 'head' );     //头节点
  this.find = find;                   //查找节点
  this.insert = insert;               //插入节点
  this.remove = remove;               //删除节点
  this.findPrev = findPrev;           //查找前一个节点
  this.display = display;             //显示链表
  this.findNull = findNull;
  this.linkLength = linkLength;
}


function find ( item ) {
  var currNode = this.head;
  while ( currNode.element != item ){
      currNode = currNode.next;
  }
  return currNode;
}

// find 方法同时展示了如何在链表上移动, 将链表的头节点赋值给新创建的节点, 然后在链表上循环,如果当前节点的 element 属性和我们要找的信息不符,就将当前节点移动到下一个节点,如果查找成功,该方法返回包含该数据的节点,否则,就会返回 null.


//插入节点

function insert ( newElement , item ) {
  var newNode = new Node( newElement );
  var currNode = this.find( item );
  newNode.next = currNode.next;
  currNode.next = newNode;
}

function findPrev(){

}

//显示链表元素

function display () {
    var currNode = this.head;
    while ( !(currNode.next == null) ){
        console.log( currNode.next.element );
        currNode = currNode.next;
    }
}


function findPrev( item ) {
  var currNode = this.head;
  while ( !( currNode.next == null) && ( currNode.next.element != item )){
      currNode = currNode.next;
  }
  return currNode;
}


function findNull () {
  var currNode = this.head;
  while ( currNode.next != null ){
      currNode = currNode.next;
  } 
  return currNode;
}

//删除节点

function remove ( item ) {
  var prevNode = this.findPrev( item );
  if( !( prevNode.next == null ) ){
      prevNode.next = prevNode.next.next;
  }
}

function linkLength (L){
  var k = 0;
  var currNode = this.head;
  while ( currNode.next != null ){
    currNode = currNode.next;
    k++
  }
  return k 
}

/* var reverseList = function() {
    var reverseFruits = new LList();
    var length = this.linkLength();
    for(let i = 0; i< length; i++ ){
      //找到最后一位
      const currNode = this.findNull();
      // console.log('currNode: ', currNode.element);
      //删除最后一位

      console.log(reverseFruits)
    }

    //插入最后一位
    reverseFruits.insert(currNode.element, 'head');  //这样会有问题, 一直跟在 head 后面
    // return reverseFruits

}; */

//迭代
var reverseList = function(head) {
  if (head === null || head.next === null) {    // 链表为空或只有一个节点时，不用反转
    return head;
  }
  var p = head.next;
  head.next = null;    // 让原本的head变为尾节点
  var temp;    // 临时指针
  while (p !== null) {
    temp = p.next;
    p.next = head;
    head = p;
    p = temp;
  }
  return head
}

// head=> a => b => p =>
// 反转后 head 的 next 变成 null, a 存为 p, p.next 也就是 b 存为 temp, p.next 指向 head. b 存为 p.实现反转


//递归
var reverseList = function(head) {
  if (head === null || head.next === null) {
    return head;
  }
  
  var new_head = reverseList(head.next);  // 反转后的头节点
  head.next.next = head;                  // 将反转后的链表的尾节点与当前节点相连
  head.next = null;
  return new_head;
  
}
//局部反转

var reverseList = function (head) {
  let pre = null
  while (head) {
      next = head.next
      head.next = pre
      pre = head
      head = next
  }
  return pre
};

var fruits = new LList();
fruits.insert('Apple', 'head');
fruits.insert('Banana', 'Apple');
fruits.insert('Pear' , 'Banana');
fruits.insert('Grape' , 'Pear');

const reverseFruitsList = reverseList(fruits.head)
console.log('reverseFruitsList: ', reverseFruitsList);

// fruits.remove('Pear')


























































