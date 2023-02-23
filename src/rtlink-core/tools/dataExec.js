// --------------------------------------------------------
// 将数字西方化显示（千位加逗号）
// Author:zbc 
// Last maintain time: 2023-02-13
// --------------------------------------------------------
export const commaedNumber = x => {
  if (typeof x !== "number") {
    throw new Error("commaedNumber函数传参不是一个数字");
  } else {
    let num;
    if (x < 0) {
      num = -x;
    } else {
      num = x;
    }

    // 先判断是否有小数部分
    let withXS = Math.trunc(num) < num;
    // 对小数进行隔离处理

    if (withXS) {
      let zs = Math.trunc(num);
      let xs = parseInt(`${num}`.split(".")[1]);

      let numStr = zs.toString();
      let strArr = numStr.split("");
      let rArr = strArr.reverse();
      const L = strArr.length;
      let resArr = [];
      for (let i = 0; i < L; i++) {
        resArr.push(rArr[i]);
        if (!(i % 2) && i !== 0) {
          if (rArr[i + 1]) resArr.push(",");
        }
      }

      return resArr.reverse().join("") + `.${xs}`;
    } else {
      let numStr = num.toString();
      let strArr = numStr.split("");
      let rArr = strArr.reverse();
      const L = strArr.length;
      let resArr = [];
      for (let i = 0; i < L; i++) {
        resArr.push(rArr[i]);
        if (!(i % 2) && i !== 0) {
          if (rArr[i + 1]) resArr.push(",");
        }
      }

      return resArr.reverse().join("");
    }
  }
};

