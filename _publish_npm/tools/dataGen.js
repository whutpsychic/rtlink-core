import moment from "moment"
// --------------------------------------------------------
// 生成一个随机数
// Author:zbc 
// Last maintain time: 2023-02-23
// --------------------------------------------------------
export const genRandomNumber = (min = 0, max = 100, fixed = 0, num = 1) => {
  const result = [];

  for (let i = 0; i < num; i++) {
    if (fixed) {
      result.push(
        parseFloat((Math.random() * (max - min) + min).toFixed(fixed))
      );
    } else {
      result.push(parseInt(Math.random() * (max - min) + min));
    }
  }

  return result.length === 1 ? result[0] : result;
};

// --------------------------------------------------------
// 生成一个以某天为起始，之前n天的字符串数组
// YYYY-MM-DD
// Author:zbc 
// Last maintain time: 2023-02-23
// --------------------------------------------------------
export const genDatesArr = (date = moment(), n = 7) => {
  let result = [];
  // moment
  if (date._isAMomentObject) {
    for (let i = 0; i < n; i++) {
      if (i === 0) {
        result.unshift(date.format("YYYY-MM-DD"));
      } else {
        result.unshift(date.subtract(1, "days").format("YYYY-MM-DD"));
      }
    }
  } else {
    throw new Error(
      "genDatesArr函数中参数date不是一个moment对象或者moment版本过低"
    );
  }

  return result;
};

// --------------------------------------------------------
// 生成一个以某月为起始，之前n个月的字符串数组
// YYYY-MM
// Author:zbc 
// Last maintain time: 2023-02-23
// --------------------------------------------------------
export const genMonthsArr = (month = moment(), n = 7) => {
  let result = [];
  // moment
  if (month._isAMomentObject) {
    for (let i = 0; i < n; i++) {
      if (i === 0) {
        result.unshift(month.format("YYYY-MM"));
      } else {
        result.unshift(month.subtract(1, "months").format("YYYY-MM"));
      }
    }
  } else {
    throw new Error("genDatesArr函数中参数date不是一个moment对象");
  }

  return result;
};

// --------------------------------------------------------
// 生成数字序列
// Author:zbc 
// Last maintain time: 2023-02-23
// --------------------------------------------------------
export const genNumberStream = (start = 1, length = 7, spliter = 1) => {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(start + i * spliter);
  }
  return arr;
};

// --------------------------------------------------------
// 生成随机编码
// Author:zbc 
// Last maintain time: 2023-02-23
// --------------------------------------------------------
export const genRandomCode = (type, length = 7) => {
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
  for (let i = 0; i < length; i++) {
    let index = parseInt(Math.random() * 10);
    resStr += String.fromCharCode(targetList[index]);
  }
  return resStr;
};
