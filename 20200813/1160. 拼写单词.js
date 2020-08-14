/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {

  // 思路 就是拿词汇表 去里面找  每个字母都找到 那就是一定有.

  let arr = [];
  let Num = 0;
  for(let i = 0; i< words.length; i++){
    let num = words[i].length;
    let n = 0;
    for(let j = 0; j < chars.length; j++){
      if(words[i].includes(chars[j])){
        console.log('i', words[i])

        n++
      }
    }
    if(num < n)  Num +=words[i].length 
  }
  return Num
};

var words = ["cat","bt","hat","tree"], chars = "atach";
// var words = ["hello","world","leetcode"], chars = "welldonehoneyr";
var value = countCharacters(words, chars);
console.log('value: ', value);

var countCharacters = function(words, chars) {
  // 用于保存长度之和
  let size = 0;
  // 字母Map，用于存放每个字母的出现频率
  let charMap = new Map();

  for(let char of chars) {
     // 遍历字母表，统计其中每个字母出现的频率
     charMap.set(char, (charMap.has(char) ? charMap.get(char) + 1 : 1));
  }

  // 双重循环，外层循环遍历单词数组中的每个单词
  for(let word of words) {
      // 单词Map，用于存放单词中每个字母的出现频率
      let wordMap = new Map();

      // 内层循环
      for(let char of word) {
          // 统计字符串（单词）中每个字母出现的频率
          wordMap.set(char, (wordMap.has(char) ? wordMap.get(char) + 1 : 1));
      }

      // 是否满足拼写
      let enough = true;

      // 遍历待匹配单词的每个字母
      for(let char of word) {
          // 判断 字母表中的字母是否足够拼写单词 或者 字母表中是否有该字母
         if(wordMap.get(char) > charMap.get(char) || charMap.get(char) === undefined) {
             enough = false;
             break;
         }
      }
      if(enough) {
          // 累加可拼写的单词长度
          size += word.length;
      }
  }

  // 返回单词长度
  return  size;
};


// 一、hash
var countCharacters = function(words, chars) {
  let map =  new Map()
  let cnt = 0
  for (let c of chars) {
      map.set(c,map.has(c)? map.get(c)+1:1)
  }
  for (let w of words) {
      if (check(w, new Map(map))) {
          cnt += w.length
      }
  }
  return cnt

};
function check(w, map) {
  for (let i of w) {
      if (map.has(i) && map.get(i)>0){
          map.set(i, map.get(i) - 1)
      }else{
          return false
      }
  }
  return true
}
