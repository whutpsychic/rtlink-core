<template>
  <div class="page-content-container">
    <h2>tilingTreeData(data, option) 整理树形数据</h2>
    <h4>data, option = { childStr: "children" }</h4>
    <p>返回一个经过整理后的一维数组。将树形数据平铺后放在同一个数组中。data 是输入对象，option 是配置项。</p>
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
        `import { tilingTreeData } from '@/rtlink-core';

const dataArr = [
  {
    name: "name1", value: "value1", options: [
    { name: "name11", value: "value11" },
    { name: "name12", value: "value12" },
    { name: "name13", value: "value13" }
    ]
  },
  {
    name: "name2", value: "value2", options: [
      { name: "name21", value: "value21" }
    ]
  },
  {
    name: "name3", value: "value3", options: [
      { name: "name31", value: "value31" }
    ]
  },
];
const newData = tilingTreeData(dataArr, { labelStr: 'name', childStr: "options" });

console.log(newData);`,
      result:
        `[
  {name: 'name1', value: 'value1', options: Array(3)},
  {name: 'name11', value: 'value11'},
  {name: 'name12', value: 'value12'},
  {name: 'name13', value: 'value13'},
  {name: 'name2', value: 'value2', options: Array(1)},
  {name: 'name21', value: 'value21'},
  {name: 'name3', value: 'value3', options: Array(1)},
  {name: 'name31', value: 'value31'}
]`
    }
  }
}

</script>


<style scoped>
p {
  font-size: 15px;
}
</style>