import moment from "moment"
import { deepClone } from "./fn.js"
import * as _helper from "./_helper.js"

// --------------------------------------------------------
// 处理掉字段为时间的值
// 输出一个完整的新对象，不改变原对象
// Author:zbc 
// Last maintain time: 2023-02-23
// --------------------------------------------------------
export const formatDateTimeParams = (form = {}, strArr = [], formatter = "YYYY-MM-DD") => {
  // 深克隆
  let resultFormData = deepClone(form)

  // 转换所有格式数据
  strArr.map((key) => {
    if (resultFormData[key]._isAMomentObject) {
      resultFormData[key] = resultFormData[key].format(formatter)
    } else {
      resultFormData[key] = moment(resultFormData[key]).format(formatter)
    }
  })

  return resultFormData
}

// --------------------------------------------------------
// 将true/false转换为01的值
// 输出一个完整的新对象，不改变原对象
// Author:zbc 
// Last maintain time: 2023-02-23
// --------------------------------------------------------
export const format01Params = (form, propArr, toString) => {
  // 深克隆
  let resultFormData = deepClone(form)

  propArr.forEach((item) => {
    if ((!resultFormData[item]) || (resultFormData[item] === "false")) {
      resultFormData[item] = toString ? "0" : 0
    }
    else {
      resultFormData[item] = toString ? "1" : 1
    }
  })

  return resultFormData
}

// --------------------------------------------------------
// 处理掉字段为 cascader 的值为仅输出子节点值
// 输出一个完整的新对象，不改变原对象
// Author:zbc 
// Last maintain time: 2023-02-13
// --------------------------------------------------------
export const formatCascaderParams = (form, strArr) => {
  // 深克隆
  let resultFormData = deepClone(form)

  // 
  strArr.map((key) => {
    if (resultFormData[key] && resultFormData[key].length)
      resultFormData[key] = resultFormData[key][resultFormData[key].length - 1]
  })

  return resultFormData
}


// --------------------------------------------------------
// 整理 cascader 数据（填充时）
// Author:zbc 
// Last maintain time: 2023-02-13
// --------------------------------------------------------
export const execCascaderData = (data, option = { labelStr: "label", valueStr: "value", childStr: "children" }) => {
  let result = []
  data.forEach((item) => {
    _helper._putItIn(result, item, option)
  })

  return result
}

// --------------------------------------------------------
// 整理 tree 数据（将一些附带的额外数据全部填进去）
// Author:zbc 
// Last maintain time: 2023-02-13
// --------------------------------------------------------
export const execTreeData = (data, option = { labelStr: "label", valueStr: "value", childStr: "children" }) => {
  let result = []
  data.forEach((item) => {
    _helper._putInAsTeeNode(result, item, option)
  })

  return result
}

// --------------------------------------------------------
// 将树形数据扁平化平铺成一维数组（包含所有属性）
// 输出一个完整的新对象，不改变原对象
// Author:zbc 
// Last maintain time: 2023-02-13
// --------------------------------------------------------
export const tilingTreeData = (dataArr = [], option = { childStr: 'children' }) => {
  // 深克隆
  let _opDataArr = deepClone(dataArr)
  const result = []

  _opDataArr.forEach((item) => {
    _helper._putThemAllIn(result, item, option)
  })

  return result
}


// --------------------------------------------------------
// 对比字段，从树形数据中找到目标节点id，并将其各层父节点id按照层级顺序从大到小排进一个数组里
// Author:zbc 
// Last maintain time: 2023-02-13
// --------------------------------------------------------
export const findTreeParentNodeIdAsCascader = (dataArr, id, option = { idStr: 'id', childStr: 'children', parentIdStr: 'parentId' }) => {
  const { idStr, parentIdStr } = option

  const resultValueArr = []
  // 先将树形数据扁平化铺成一维数组
  const allData = tilingTreeData(dataArr, option)

  // 再找到目标项
  let targetItem = allData.find((item) => {
    return item[idStr] === id
  })

  // 根据目标项，逐级向上找到父节点id并依次推进result数组，直到再也找不到上级父节点
  while (_helper._hasParent(targetItem, allData, option)) {
    const parentItem = allData.find((_item_) => {
      return targetItem[parentIdStr] === _item_[idStr]
    })
    if (parentItem) {
      targetItem = parentItem
      resultValueArr.unshift(targetItem[idStr])
    }
    else {
      // 结束
      targetItem = null
    }
  }

  return resultValueArr
}



