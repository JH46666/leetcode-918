/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let count = 0;
  const hashMap = {
    'A':1,
    'B':2,
    'C':3,
    'D':4,
    'E':5,
    'F':6,
    'G':7,
    'H':8,
    'I':9,
    'J':10,
    'K':11,
    'L':12,
    'M':13,
    'N':14,
    'O':15,
    'P':16,
    'Q':17,
    'R':18,
    'S':19,
    'T':20,
    'U':21,
    'V':22,
    'W':23,
    'X':24,
    'Y':25,
    'Z':26,
  }
  for(let i = 0; i < s.length ; i++){
    count += hashMap[s[i]] * Math.pow(26, s.length - i -1)
  }
  return count
};
/* var titleToNumber = function(s, n = 0) {
  return !s ? n : titleToNumber(s.slice(1), (s[0].charCodeAt() - 64) + n * 26);
}; */
//感觉有点像两个 for 循环

var s = "A";
var s = "Z";
var s = "AB"; // 28

var s = "ZY"; // 701
var s = "AA"; // 27

var val = titleToNumber(s)
console.log('val: ', val);