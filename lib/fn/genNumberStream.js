// --------------------------------------------------------
// 生成数字序列
// Author:zbc
// Last maintain time: 2023-02-23
// --------------------------------------------------------
export default function (start = 1, length = 7, spliter = 1) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(start + i * spliter);
  }
  return arr;
};
