<template>
  <div class="page-content-container">
    <h2>execTableQueryParams(baseParams, extraConditions) 构造表格查询条件的传参</h2>
    <h4>baseParams = Object, extraConditions = Object</h4>
    <h4>baseParams = { querys = [], pageBean = {}, sorter = {} }, extraConditions = {}</h4>
    <p>返回一个固定对象。包含查询时的必要参数，可添加额外的传参。</p>
    <highlightjs language="js" :code="code" />
    <highlightjs language="js" :code="result" />
  </div>
</template>
<script >

export default {
  data() {
    return {
      code:
        `import { execTableQueryParams } from 'rtlink-core';

const obj = execTableQueryParams();

console.log(obj);`,
      result:
        `// 运行结果
{
    querys: [],
    "pageBean": {
      "page": 1,
      "pageSize": 9999,
      "showTotal": true
    }
}
`
    }
  }
}

</script>


<style scoped>
p {
  font-size: 15px;
}
</style>