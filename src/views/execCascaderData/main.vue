<template>
  <div class="page-content-container">
    <h2>execCascaderData(data, option) 整理 cascader 数据</h2>
    <h4>data, option = { labelStr: "label", valueStr: "value", childStr: "children" }</h4>
    <p>返回一个经过整理后的数组。将树形数据整理为符合 element-ui 中 {{ ' < Cascader /> ' }} 类型的最简数据。data 是输入对象，option 是配置项。填充数据时常用。
    </p>
    <p>由于服务端接口返回的数据命名时常不同，因此产生了本函数用于规范数据并对接于 element-ui。</p>
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
        `import { execCascaderData } from 'rtlink-core';

const dataArr = [{ name: "name1", value: "value1", options: [{ name: "name2", value: "value2" }] }];
const newData = execCascaderData(dataArr, { labelStr: 'name', childStr: "options" });

console.log(newData);`,
      result:
        `[
  { label: "name1", 
    value: "value1", 
    children: [
      { label: "name2", value: "value2" }
    ] 
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