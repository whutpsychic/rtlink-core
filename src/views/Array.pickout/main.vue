<template>
  <div class="page-content-container">
    <h2>Array.prototype.pickout(obj) 将某项从数组中摘除（浅比较）</h2>
    <h4>obj = anyType </h4>
    <p>没有返回值，且改变原数组。</p>
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
        `const array = [1, 2, 3, 4, 5]

array.pickout(2)

console.log(array)`,
      result: `[1, 3, 4, 5]`
    }
  }
}

</script>

<style scoped>
p {
  font-size: 15px;
}
</style>