// --------------------------------------------------------
// 构造一个表格空查询条件的传参
// 此函数输出一个查询时的必要参数，用于使用表格数据查询的方式查询出所有数据，这个时候要用到的空条件，但是带有 page/pageSize 等参数
// Author:zbc 
// Last maintain time: 2023-02-13
// --------------------------------------------------------
export const buildBlankArgs = () => {
  return {
    querys: [],
    "pageBean": {
      "page": 1,
      "pageSize": 9999,
      "showTotal": true
    },
  }
}

// --------------------------------------------------------
// 构造一个表格查询条件的传参
// 此函数输出一个查询时的必要参数，可添加额外的传参
// Author:zbc 
// Last maintain time: 2023-08-14
// --------------------------------------------------------
export const buildTableQueryParams = ({ querys = [], pageBean = {}, sorter }, extraConditions = {}) => {

  let _querys = []

  for (let it of querys) {
    _querys.push({
      "property": it['property'],
      "value": it['value'],
      "operation": it['operation'],
      "relation": it['relation'],
    })
  }

  for (let it in extraConditions) {
    if (extraConditions.hasOwnProperty(it)) {
      let target = extraConditions[it]
      if (target) {
        _querys.push({
          "property": it,
          "value": target['value'],
          "operation": target['operation'],
          "relation": target['relation'],
          "group": target['group'],
        })
      }
    }
  }

  let obj = {
    querys: _querys,
    pageBean: {
      "page": pageBean.page,
      "pageSize": pageBean.pageSize,
      "showTotal": true
    },
    sorter
  }

  return obj
}
