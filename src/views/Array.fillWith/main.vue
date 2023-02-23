<template>
  <div class="page-content-container">
    <h2>{{ 'void' }}</h2>
    <h2>Array.prototype.fillWith(obj, n) 填充数组</h2>
    <h4>obj = anyType, n = Number </h4>
    <p>没有返回值，且改变原数组。将某数组以 obj 填满至长度为 n。</p>
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

array.fillWith(0, 8)

console.log(array)`,
      result: `[1, 2, 3, 4, 5, 0, 0, 0]`
    }
  }
}

</script>


<style scoped>
p {
  font-size: 15px;
}
</style>