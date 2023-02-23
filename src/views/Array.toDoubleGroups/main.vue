<template>
  <div class="page-content-container">
    <h2>Array.prototype.toDoubleGroups() 划分数组中的项</h2>
    <p>返回一个新的二维数组。将数组中的项按顺序划分为两组。</p>
    <highlightjs language="js" :code="code" />
    <highlightjs language="js" :code="result" />
  </div>
</template>
<script >

export default {
  data() {
    return {
      code:
        `const array = [1, 2, 3, 4, 5]

array.toDoubleGroups()

console.log(array)`,
      result: `// 运行结果
[[1, 3, 5], [2, 4]]`
    }
  }
}

</script>

<style scoped>
p {
  font-size: 15px;
}
</style>