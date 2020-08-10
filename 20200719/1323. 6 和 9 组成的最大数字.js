/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
  console.log('nums: ', num);
  var nums = num.toString().split('')
  // 分成两步 :1 . 每位反转一次 设置一个 map 2. 进行比大小 
    const Map = {
      6: 9,
      9:6
    }

    var MaxVal = 0;
    for(let i = 0; i < nums.length; i++){
      nums[i] = Map[nums[i]];
      console.log('nums: ', nums);
      console.log('parseFloat(nums): ',nums.toString(), nums.toString().replace(',', ''));
      MaxVal = Math.max(MaxVal,parseFloat(nums.toString())) 

    }
    return MaxVal
};



var maximum69Number  = function(num) {
    const arr = String(num).split('')
    const index = arr.indexOf('6')
    if(index > -1) {
        arr[index] = 9
        return Number(arr.join(''))
    }
    return num
};



var maximum69Number  = function(num) {

return +(num+'').replace("6", "9")

};

var num = 9669;
var value = maximum69Number(num)
console.log('value: ', value);





















