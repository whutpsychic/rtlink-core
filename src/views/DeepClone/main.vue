<template>
  <div class="page-content-container">
    <h2>deepClone(args) 深克隆</h2>
    <h4>args = Object | Array </h4>
    <p>返回一个深克隆的新对象或数组</p>
    <highlightjs language="js" :code="code" />
    <highlightjs language="js" :code="result" />
  </div>
</template>
<script>

export default {
  data() {
    return {
      code: 
`import { deepClone } from 'rtlink-core';

const obj = { name: "name1", value: "value1", description: "description1" };
const newObj = deepClone(obj);

console.log(newObj);`,
      result: 
`// 运行结果
{ name: "name1", value: "value1", description: "description1" }
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