const m = {};

function _deepClone(obj) {
  if (obj instanceof Array) {
    let newArray = [];
    for (let i = 0; i < obj.length; i++) {
      if (typeof obj[i] !== "number" && typeof obj[i] !== "string") {
        newArray[i] = _deepClone(obj[i]);
      } else {
        newArray[i] = obj[i];
      }
    }
    return newArray;
  }
  // 认为是对象
  else {
    let newObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] !== "number" && typeof obj[key] !== "string") {
          newObj[key] = _deepClone(obj[key]);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    return newObj;
  }
}

// 深克隆
m.deepClone = _deepClone;

// 将数字西方化显示（千位加逗号）
m.commaedNumber = x => {
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

export default m;
