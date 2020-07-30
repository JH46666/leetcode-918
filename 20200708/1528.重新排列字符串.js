var restoreString = function(s, indices) {
  let str = '';
  const obj  = {}
  for(let i in indices){
    var key =indices[i];
    obj[key] = s[i];
  }
  Object.values(obj).forEach(element => {
    str = str+ element
  });;
  return str;
};

var restoreString = function(s, indices) {
  let arr=[];
  for(let i in indices){
  console.log('indices: ', indices[i], s[i]);
  arr[indices[i]]=s[i];
  }
  console.log('indices: ', arr);

  return arr.join("")
};
var s = "codeleet", indices = [4,5,6,7,0,2,1,3];
var s = "aiohn", indices = [3,1,4,2,0]
var val = restoreString(s, indices)
console.log('val: ', val);


//数组会自动[排列]

