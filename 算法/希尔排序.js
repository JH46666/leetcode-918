Array.prototype.shell_sort = function() {
	var gap, i, j;
  var temp;
  console.log('this.len', this.length)
  for (gap = this.length >> 1; gap > 0; gap >>= 1)
  console.log('gap: ', gap);
  
		for (i = gap; i < this.length; i++) {
			temp = this[i];
			for (j = i - gap; j >= 0 && this[j] > temp; j -= gap)
				this[j + gap] = this[j];
			this[j + gap] = temp;
		}
  return this
};

/**
 * 插入排序在對幾乎已經排好序的數據操作時，效率高，即可以達到線性排序的效率
但插入排序一般來說是低效的，因為插入排序每次只能將數據移動一位
 */
var num = [22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70];
var a = num.shell_sort();
console.log('a: ', a);