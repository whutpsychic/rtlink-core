// --------------------------------------------------------
// 生成随机编码
// Author:zbc 
// Last maintain time: 2023-11-28
// --------------------------------------------------------
import genNumberStream from './genNumberStream.js';
import genRandomNumber from './genRandomNumber.js';

function _genRandomCode(type, length = 7) {
  // ascii 码表对照数字索引
  const wordList = genNumberStream(65, 26);
  const wordList2 = genNumberStream(97, 26);
  const numList = genNumberStream(48, 10);

  let targetList = []
  if (type === "CHAR") {
    targetList = wordList
  }
  else if (type === "char") {
    targetList = wordList2
  }
  else if (type === "number") {
    targetList = numList
  }
  else {
    targetList = [...numList, ...wordList, ...wordList2]
  }

  let resStr = "";
  const L = targetList.length;
  for (let i = 0; i < length; i++) {
    let index = genRandomNumber(0, L);
    resStr += String.fromCharCode(targetList[index]);
  }
  return resStr;
}

export default function (type, length = 7, num = 1) {
  if (num > 1) {
    let result = [];
    for (let i = 0; i < num; i++) {
      result.push(_genRandomCode(type, length));
    }
    return result;
  }
  else {
    return _genRandomCode(type, length);
  }
};