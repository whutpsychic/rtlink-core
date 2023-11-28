// --------------------------------------------------------
// 生成一个随机数
// Author:zbc 
// Last maintain time: 2023-11-28
// --------------------------------------------------------
export default function (min = 0, max = 100, num = 1, fixed = 0) {
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
