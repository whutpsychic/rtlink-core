<template>
  <div class="page-content-container">
    <h2>formatDateTimeParams(obj, formatter) 格式化对象中值为时间类型的数据</h2>
    <h4>obj = Object, formatter = String</h4>
    <p>返回一个深克隆的新对象。obj 是输入对象，formatter 是格式模板，对接于 momentjs。常用于整理表单数据格式。</p>
    <highlightjs language="js" :code="code" />
    <highlightjs language="js" :code="result" />
  </div>
</template>
<script >

export default {
  data() {
    return {
      code: 
`import { formatDateTimeParams } from 'rtlink-core';

const formObj = { name: "name1", value: "value1", time: new Date() };
const newObj = formatDateTimeParams(formObj, 'YYYY-MM-DD');

console.log(newObj);`,
      result: 
`// 运行结果
{ name: "name1", value: "value1", time: '2023-02-23' }
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