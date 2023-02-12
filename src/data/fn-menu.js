
const fnMenu = {}

// ES6 通用纯函数
fnMenu.pureFn = [
  { name: "deepClone", explain: "深克隆", nav: "deepClone" },
  { name: "genRandomNum", explain: "生成随机数", nav: "genRandomNum" },
  { name: "genRandomNumArr", explain: "生成随机数组", nav: "genRandomNumArr" },
  { name: "genDatesArr", explain: "生成时间数组", nav: "genDatesArr" },
  { name: "genMonthsArr", explain: "生成数字序列", nav: "genMonthsArr" },
  { name: "genRandomCode", explain: "生成随机编码", nav: "genRandomCode" },
  { name: "commaedNumber", explain: "西化数字", nav: "commaedNumber" },
]

// rtc ES6 Prototype 通用函数
fnMenu.rtc = [
  {
    group: "全局函数",
    children: [
      { name: "finalDo", explain: "最后执行", nav: "finalDo" },
    ]
  },
  {
    group: "String",
    children: [
      { name: "contains", explain: "包含", nav: "contains" },
    ]
  },
  {
    group: "Array",
    children: [
      { name: "contains", explain: "包含", nav: "contains" },
      { name: "pickout", explain: "拿出去", nav: "pickout" },
      { name: "fillWith", explain: "填上", nav: "fillWith" },
      { name: "toDoubleGroups", explain: "分为两组式", nav: "toDoubleGroups" },
    ]
  },
]

// element-ui 框架下通用纯函数
fnMenu.elPureFn = [
  { name: "formatDateTimeParams", explain: "处理字段为时间的值", nav: "formatDateTimeParams" },
  { name: "formatCascaderParams", explain: "处理掉字段为 cascader 的值", nav: "formatCascaderParams" },
  { name: "execCascaderData", explain: "整理 cascader 数据", nav: "execCascaderData" },
  { name: "execTreeData", explain: "整理 tree 数据", nav: "execTreeData" },
  { name: "tilingTreeData", explain: "将树形数据扁平化平铺成一维数组", nav: "tilingTreeData" },
  { name: "findTreeParentNodeIdAsCascader", explain: "树形数据转 cascader 类型的数据", nav: "findTreeParentNodeIdAsCascader" },
]

// rtlink-ui 框架下通用纯函数
fnMenu.rtPureFn = [
  { name: "buildBlankArgs", explain: "构造表格查询空传参", nav: "buildBlankArgs" },
  { name: "execTableQueryParams", explain: "构造表格查询传参", nav: "execTableQueryParams" },
]



export default fnMenu