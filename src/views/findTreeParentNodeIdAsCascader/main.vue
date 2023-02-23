<template>
  <div class="page-content-container">
    <h2>findTreeParentNodeIdAsCascader(data, id, option) 整理树形控制键数据</h2>
    <h4>data, id, option = { idStr: 'id', childStr: 'children', parentIdStr: 'parentId' }</h4>
    <p>返回一个经过整理后的一维数组。对比字段，从树形数据中找到目标节点id，并将其各层父节点id按照层级顺序从大到小排进一个数组里，使其可以直接锚定 cascader 中的数据位置。</p>
    <highlightjs language="js" :code="code" />
    <highlightjs language="js" :code="result" />
  </div>
</template>
<script>

export default {
  data() {
    return {
      code:
        `import { findTreeParentNodeIdAsCascader } from 'rtlink-core';

const dataArr = [{ name: "name1", value: "value1", options: [{ name: "name2", value: "value2" }] }];
const newData = findTreeParentNodeIdAsCascader(dataArr, { labelStr: 'name', childStr: "options" });

console.log(newData);`,
      result:
        `// 运行结果
[
  { label: "name1", value: "value1", children: [{ label: "name2", value: "value2" }] },
  { label: "name2", value: "value2" }
]
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