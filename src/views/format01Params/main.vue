<template>
  <div class="page-content-container">
    <h2>{{ 'Object' }}</h2>
    <h2>format01Params(obj, strArr, toString) 格式化对象中值为 cascader 类型的数据</h2>
    <h4>{{ 'obj = Object, strArr = Array<String>, toString = Boolean' }}</h4>
    <p>返回一个深克隆的新对象。obj 是输入对象，strArr 是要处理的字段名。toString 为 true 时输出字符串 '0'/'1'。常用于整理表单数据格式。</p>
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
        `import { format01Params } from "rtlink-core";

const formObj = { name: "name1", value: "value1", cas: true };
const formObj2 = { name: "name2", value: "value2", cas: false };
const formObj3 = { name: "name3", value: "value3", cas: 'true' };
const formObj4 = { name: "name4", value: "value4", cas: 'false' };

const newObj = format01Params(formObj, ['cas']);
const newObj2 = format01Params(formObj2, ['cas'], true);
const newObj3 = format01Params(formObj3, ['cas']);
const newObj4 = format01Params(formObj4, ['cas'], true);

console.log(newObj);
console.log(newObj2);
console.log(newObj3);
console.log(newObj4);`,
      result:
        `{name: 'name1', value: 'value1', cas: 1}
{name: 'name2', value: 'value2', cas: '0'}
{name: 'name3', value: 'value3', cas: 1}
{name: 'name4', value: 'value4', cas: '0'}`
    }
  }
}

</script>


<style scoped>
p {
  font-size: 15px;
}
</style>