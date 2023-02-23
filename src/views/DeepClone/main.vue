<template>
  <div class="page-content-container">
    <h2>{{ '<T>' }}</h2>
    <h2>deepClone(args) 深克隆</h2>
    <h4>args = Object | Array </h4>
    <p>返回一个深克隆的新对象或数组</p>
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
`import { deepClone } from "rtlink-core"

const data = {
  "name": 1,
  "value": 12,
  "children": [
    3,
    5,
    8
  ]
}

const newData = deepClone(data)

console.log(newData)`,
      result: 
`{
  "name": 1,
  "value": 12,
  "children": [
    3,
    5,
    8
  ]
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