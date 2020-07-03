// 使用堆栈来组织数据，来实现文本编辑器的“撤消”操作;使用队列处理数据，实现web浏览器的事件循环处理事件(单击click、悬停hoover等)。



function Stack() {
  this._size = 0;
  this._storage = {};
}



Stack.prototype.push = function(data) {
  // increases the size of our storage
  var size = ++this._size;

  // assigns size as a key of storage
  // assigns data as the value of this key
  this._storage[size] = data;
};

Stack.prototype.pop = function() {
  var size = this._size,
      deletedData;

  if(size){
    deletedData = this._storage[size];

    delete this._storage[size];
    this.size--;
  
    return deletedData;
  }
};





const a = new Stack();
a.push(1)
a.push(2)
a.push(3)
a.pop()
console.log('a', a)
































