// --------------------------------------------------------
// 深克隆
// Author:zbc 
// Last maintain time: 2023-02-23
// --------------------------------------------------------
export function deepClone(obj) {
  // moment
  if (obj._isAMomentObject) {
    return obj.clone()
  }
  // 数组
  if (typeof (obj) === 'array') {
    let newArray = [];
    for (let i = 0; i < obj.length; i++) {
      if (typeof obj[i] !== "number" && typeof obj[i] !== "string") {
        newArray[i] = deepClone(obj[i]);
      } else {
        newArray[i] = obj[i];
      }
    }
    return newArray;
  }
  // 对象
  else if (typeof (obj) === 'object') {
    let newObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] !== "number" && typeof obj[key] !== "string") {
          newObj[key] = deepClone(obj[key]);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    return newObj;
  }
  // 其他浅对象
  else {
    return obj
  }
}


