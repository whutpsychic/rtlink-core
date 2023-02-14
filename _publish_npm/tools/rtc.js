//========================================
// 本模块为对js的原生扩展模块
// 本模块采用大量的es6语法，慎用
// 开发者：zbc
// 创建日期：2022-07-19
// 上次修改日期：2023-02-13
// ========================================
const rtc = {};

// *********************************************
// 数组的扩展方法若无注释则认为不修改原数组
// *********************************************
rtc.init = () => {

  // ******************************** 全局环境 ********************************
  // 放在js线程最后执行
  window.finalDo = (fn) => {
    if (typeof (fn) === "function")
      setTimeout(() => {
        fn()
      }, 0)
  }

  // ******************************** String ********************************
  // 扩展 String 方法
  // 判断数组中是否包含某一项(浅比较)
  String.prototype.contains = function (x) {
    return this.indexOf(x) != -1
  }
  // ******************************** Array ********************************
  // 扩展 Array 方法
  // 判断数组中是否包含某一项(浅比较)
  Array.prototype.contains = function (x) {
    for (let i of this) {
      if (i == x) return true
    }
  }
  // 扩展 Array 方法
  // *修改原数组
  // 将数组中某一项剔除出去(浅比较)
  // 仅操作一次
  Array.prototype.pickout = function (x) {
    for (let i in this) {
      if (this[i] == x) {
        this.splice(i, 1)
      }
    }
  }
  // 扩展 Array 方法
  // 给当前数组用x填满至长度n
  Array.prototype.fillWith = function (x, n) {
    let L = this.length
    let result = []
    for (let i = 0; i < n; i++) {
      if (i < L) {
        result.push(this[i])
      } else {
        result.push(x)
      }
    }
    return result
  }

  // 扩展 Array 方法
  // 将一维数组2个为一组进行剪切重组
  Array.prototype.toDoubleGroups = function () {
    let result = [];
    let L = this.length;
    for (let i = 0; i < L; i++) {
      if (i % 2) {
        result[parseInt(i / 2)].push(this[i])
      } else {
        result.push([this[i]])
      }
    }
    return result;
  }

}

// 卸载所有rtc的扩展方法
// 这是一件神奇的事情，竟然会有三方组件检测 prototype，如果有多余的东西就不给正常运行，奇了个乖乖
// 为预防上述情况，特意设置卸载rtc的方法
rtc.uninit = () => {
  // String
  delete String.prototype['contains']
  // Array
  delete Array.prototype['contains']
  delete Array.prototype['pickout']
  delete Array.prototype['fillWith']
  delete Array.prototype['toDoubleGroups']
}

export default rtc;