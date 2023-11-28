// ========================= global =========================
import global from './global/index.js';
// ========================= prototype.Array =========================
import array from './prototype/Array.js';

const rtc = {};

rtc.init = () => {

  // 初始化全局函数
  for (let key in global) {
    if (global.hasOwnProperty(key)) {
      window[key] = global[key];
    }
  }

  // 初始化 property Array
  for (let key in array) {
    if (array.hasOwnProperty(key)) {
      Array.prototype[key] = array[key];
    }
  }

}

export default rtc;