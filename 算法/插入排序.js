Array.prototype.bubble_sort = function() {
  var i, j, temp;
  if(this.length <= 1) return 

  for(i = 1; i < this.length; ++i){
    temp = this[i];
    j = i-1;
    console.log('j: ', j);
    // 查找插入位置
    for(; j >= 0; --j){
      console.log('this[j] > temp: ', this[j] > temp, this[j], temp );
      if(this[j] > temp){
        this[j+1]  = this[j]  // 数据移动
      } else {
        break;
      }
    }
    this[j+1] = temp;  // 插入数据
  }
  return this
};


var num = [22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70];
var a = num.bubble_sort();
console.log('a: ', a);