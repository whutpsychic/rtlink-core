<template>
  <div class="page-content-container">
    <h2>buildBlankArgs() 构造空的表格查询参数</h2>
    <p>返回一个固定对象</p>
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
        `import { buildBlankArgs } from 'rtlink-core';

const obj = buildBlankArgs();

console.log(obj);`,
      result:
        `{
    querys: [],
    "pageBean": {
      "page": 1,
      "pageSize": 9999,
      "showTotal": true
    }
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