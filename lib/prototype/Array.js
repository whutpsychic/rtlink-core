const array = {

  // 扩展 Array 方法
  // 判断数组中是否包含某一项(浅比较)
  contains: function (x) {
    for (let i of this) {
      if (i === x) return true
    }
    return false
  },
  // 扩展 Array 方法
  // *修改原数组
  // 将数组中某一项剔除出去(浅比较)
  // 仅操作一次
  pickout: function (x) {
    for (let i in this) {
      if (this[i] == x) {
        this.splice(i, 1)
      }
    }
  },
  // 扩展 Array 方法
  // 给当前数组用x填满至长度n
  fillWith: function (x, n) {
    const L = this.length
    for (let i = 0; i < n; i++) {
      if (i < L) {
        continue
      } else {
        this.push(x)
      }
    }
    return this
  },

  // 扩展 Array 方法
  // 将一维数组2个为一组进行剪切重组
  toDoubleGroups: function () {
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

export default array;