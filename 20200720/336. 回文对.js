/**
 * @param {string[]} words
 * @return {number[][]}
 */
/* const isPalindrome = (str) => {
  let l = 0, r = str.length - 1;
  while (l < r) {
    if (str[l++] != str[r--]) return false; // 我很不想这么写，尽量一句话做一件事吧
  }
  return true;
};
const palindromePairs = (words) => {
  const reverseds = new Map();
  for (let i = 0; i < words.length; i++) {
    const reversed = words[i].split('').reverse().join('');
    reverseds.set(reversed, i);
  }
  const res = [];
  for (let i = 0; i < words.length; i++) {
    const curWord = words[i];
    if (isPalindrome(curWord) && reverseds.has('') && curWord !== '') {
      res.push([reverseds.get(''), i]);
    }
    for (let j = 0; j < curWord.length; j++) {
      const left = curWord.substring(0, j);
      const right = curWord.substring(j);
      if (isPalindrome(left) && reverseds.has(right) && reverseds.get(right) !== i) {
        res.push([reverseds.get(right), i]);
      }
      if (isPalindrome(right) && reverseds.has(left) && reverseds.get(left) !== i) {
        res.push([i, reverseds.get(left)]);
      }
    }
  }
  return res;
}; */



/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
  let i;
  let j;
  let left;
  let right;
  let array = [];
  for(i = 0 ; i < words.length ; i++){
      for(j = i+1; j<words.length ; j++){
          left = words[i].concat(words[j]);
          if(isPairs(left)){
              array.push([i,j])
          }
          right = words[j].concat(words[i]);
          if(isPairs(right)){
              array.push([j,i])
          }
      }
  }
  return array;
};

var isPairs = function(words){
  // console.log("检测",words)
  let index = 0;
  let length = words.length;
  while(index < length / 2){
      console.log("左字符",words.charAt(index));
      console.log("右字符",words.charAt(length-index-1));
      if(words.charAt(index) != words.charAt(length-index-1) && index != length-index)
          return false;
      index++;
  }
  return true;
}

/**
 * 
 * 
 * 
 * 
 * 示例 1：

输入：["abcd","dcba","lls","s","sssll"]
输出：[[0,1],[1,0],[3,2],[2,4]] 
解释：可拼接成的回文串为 ["dcbaabcd","abcddcba","slls","llssssll"]
示例 2：

输入：["bat","tab","cat"]
输出：[[0,1],[1,0]] 
解释：可拼接成的回文串为 ["battab","tabbat"]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/palindrome-pairs
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */

var  val = ["abcd","dcba","lls","s","sssll"]
var value =  palindromePairs(val)
console.log('value: ', value);