<template>
  <div class="page-content-container">
    <h2>format01Params(obj, strArr, toString) 格式化对象中值为 cascader 类型的数据</h2>
    <h4>{{ 'obj = Object, strArr = Array<String>, toString = Boolean' }}</h4>
    <p>返回一个深克隆的新对象。obj 是输入对象，strArr 是要处理的字段名。toString 为 true 时输出字符串 'true'/'false'。常用于整理表单数据格式。</p>
    <highlightjs language="js" :code="code" />
    <highlightjs language="js" :code="result" />
  </div>
</template>
<script>

export default {
  data() {
    return {
      code:
        `import { format01Params } from 'rtlink-core';

const formObj = { name: "name1", value: "value1", cas: 0 };
const newObj = format01Params(formObj, ['cas']);

console.log(newObj);`,
      result:
        `// 运行结果
{ name: "name1", value: "value1", cas: false }
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