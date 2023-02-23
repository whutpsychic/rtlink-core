<template>
  <div class="page-content-container">
    <h2>execTreeData(data, option) 整理树形数据</h2>
    <h4>data, option = { labelStr: "label", valueStr: "value", childStr: "children" }</h4>
    <p>返回一个经过整理后的数组。将树形数据整理为符合 element-ui 中 {{ '<tree/>' }} 类型的完整数据。data 是输入对象，option 是配置项。填充数据时常用。</p>
    <p>由于服务端接口返回的数据命名时常不同，因此产生了本函数用于规范数据并对接于 element-ui。这个函数与 execCascaderData 的不同点在于输出数据，保留了服务端返回的所有数据，确保在点击树节点取数据时的方便性。</p>
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
        `import { execTreeData } from 'rtlink-core';

const dataArr = [{ name: "name1", value: "value1", options: [{ name: "name2", value: "value2" }] }];
const newData = execTreeData(dataArr, { labelStr: 'name', childStr: "options" });

console.log(newData);`,
      result:
        `[
  { 
    children: [{…}],
    label: "name1",
    name: "name1",
    options: [{…}],
    value: "value1"
  }
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