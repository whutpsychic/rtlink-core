// --------------------------------------------------------
// 深克隆
// Author:zbc 
// Last maintain time: 2023-02-13
// --------------------------------------------------------
export function deepClone(obj) {
  if (obj instanceof Array) {
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
  // 认为是对象
  else {
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
}



