<template>
  <div class="page-content-container">
    <h2>{{ 'Object' }}</h2>
    <h2>formatCascaderParams(obj, strArr) 格式化对象中值为 cascader 类型的数据</h2>
    <h4>{{ 'obj = Object, strArr = Array<String>' }}</h4>
    <p>返回一个深克隆的新对象。obj 是输入对象，strArr 是要处理的字段名。常用于整理表单数据格式。</p>
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
        `import { formatCascaderParams } from "rtlink-core";

const formObj = { name: "name1", value: "value1", cas: [1, 2, 3, 4] };
const newObj = formatCascaderParams(formObj, ['cas']);

console.log(newObj);`,
      result:
        `{ name: "name1", value: "value1", cas: 4 }`
    }
  }
}

</script>


<style scoped>
p {
  font-size: 15px;
}
</style>