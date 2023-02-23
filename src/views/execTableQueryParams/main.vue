<template>
  <div class="page-content-container">
    <h2>{{ 'Object' }}</h2>
    <h2>execTableQueryParams(baseParams, extraConditions) 构造表格查询条件的传参</h2>
    <h4>baseParams = Object, extraConditions = Object</h4>
    <h4>baseParams = { querys = [], pageBean = {}, sorter = {} }, extraConditions = {}</h4>
    <p>返回一个固定对象。包含查询时的必要参数，可添加额外的传参。</p>
    <highlightjs language="js" :code="code" />
    <p> ************** 运行结果 ************** </p>
    <highlightjs language="js" :code="result" />
  </div>
</template>
<script>

export default {
  data() {
    return {
      code:
        `import moment from "moment";
import { buildTableQueryParams } from "rtlink-core";

const condition = buildTableQueryParams({
  pageBean: {
    page: 1,
    pageSize: 10,
    total: 0
  }
}, {
  treeIds: { operation: "EQUAL", relation: "AND", value: "treeIds" },
  cycleType: { operation: "EQUAL", relation: "AND", value: "cycleType" },
  start: { operation: "EQUAL", relation: "AND", value: moment().format("YYYY-MM-DD 00:00:00") },
  end: { operation: "EQUAL", relation: "AND", value: moment().format("YYYY-MM-DD 23:59:59") },
})

console.log(condition)`,
      result:
        `{
  pageBean: {
    page: 1,
    pageSize: 10,
    total: 0
  },
  querys: [
    {
      property: 'treeIds', 
      value: 'treeIds', 
      operation: 'EQUAL', 
      relation: 'AND'
    },
    {
      property: 'cycleType', 
      value: 'cycleType', 
      operation: 'EQUAL', 
      relation: 'AND'
    },
    {
      property: 'start', 
      value: '2023-02-23 00: 00: 00', 
      operation: 'EQUAL', 
      relation: 'AND'
    },
    {
      property: 'end', 
      value: '2023-02-23 23: 59: 59', 
      operation: 'EQUAL', 
      relation: 'AND'
    }
  ]
}`
    }
  }
}

</script>


<style scoped>
p {
  font-size: 15px;
}
</style>