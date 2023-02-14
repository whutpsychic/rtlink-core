// 本模块存储的是不暴露的辅助函数
// 单独存在毫无意义
// ========================= 辅助函数 =========================
export function _putItIn(arr, item, { labelStr = "label", valueStr = "value", childStr = "children" }) {

  arr.push({ label: item[labelStr], value: item[valueStr] })
  if (item[childStr] && item[childStr].length) {
    arr[arr.length - 1]["children"] = []
    item[childStr].forEach((_item_) => {
      _putItIn(arr[arr.length - 1]["children"], _item_, { labelStr, valueStr, childStr })
    })
  }

}

export function _putInAsTeeNode(arr, item, { labelStr = "label", valueStr = "value", childStr = "children" }) {

  arr.push({ ...item, label: item[labelStr], value: item[valueStr] })

  if (item[childStr] && item[childStr].length) {
    arr[arr.length - 1]["children"] = []
    item[childStr].forEach((_item_) => {
      _putInAsTeeNode(arr[arr.length - 1]["children"], _item_, { labelStr, valueStr, childStr })
    })
  }
}

export function _putThemAllIn(resultArr, targetItem, { childStr = 'children' }) {

  resultArr.push(targetItem)

  if (targetItem[childStr] && targetItem[childStr].length) {
    targetItem[childStr].forEach((_item) => {
      _putThemAllIn(resultArr, _item, childStr)
    })
  }
}

export function _hasParent(targetItem, allData, { idStr = 'id', parentIdStr = 'parentId' }) {
  if (!targetItem) return false
  const item = allData.find((_item_) => {
    return targetItem[parentIdStr] === _item_[idStr]
  })
  return item
}
