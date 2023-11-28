// --------------------------------------------------------
// 生成一个以某年为起始，之前n年或之后n年的字符串数组
// YYYY
// Author:zbc 
// Last maintain time: 2023-11-27
// --------------------------------------------------------
import dayjs from 'dayjs';

export default function (date, n, direct = false) {
  const strFormatter = 'YYYY';
  const keyword = 'year';
  let result = [];

  if (!date)
    date = new Date();

  if (!n)
    n = 7

  try {
    for (let i = 0; i < n; i++) {
      // 向前查数
      if (!direct) {
        if (i === 0) {
          result.unshift(dayjs(date).format(strFormatter));
        } else {
          result.unshift(dayjs(date).subtract(i, keyword).format(strFormatter));
        }
      }
      // 向后查数
      else {
        if (i === 0) {
          result.push(dayjs(date).format(strFormatter));
        } else {
          result.push(dayjs(date).add(i, keyword).format(strFormatter));
        }
      }
    }
  } catch (err) {
    throw new Error(err);
  }
  return result;
};