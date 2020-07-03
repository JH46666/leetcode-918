/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  var reg = "^[ ]+$";
  var re = new RegExp(reg); 
  if(re.test(s)){ return 0 }
  if(s.length == 0){ return 0}
  const num = s.trim().split(' ')
  let count = 0;
  for(let n of num){
    if(re.test(n) || (n.length == 0)){
    } else {
      count ++
    }
  }
  return count
};


var s = "Hello, my name is John";
var j = "          ";
var h = "Of all the gin joints in all the towns in all the world,   ";
var s = ", , , ,        a, eaefa"


var value = countSegments(s)
console.log('countSegments', value)


