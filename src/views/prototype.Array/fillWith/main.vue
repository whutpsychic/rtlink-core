<template>
  <div class="page-container">
    <div class="main-content">
      <h2>void</h2>
      <h3>Array.prototype.fillWith(obj: any, n: Number) 填充数组</h3>
      <p>没有返回值，且改变原数组。将某数组以 obj 填满至长度为 n。</p>
      <highlightjs language="Javascript" :code="code" />
      <p class="result-spliter">********************* 运行结果 *********************</p>
      <highlightjs language="Javascript" :code="code2" />
    </div>
  </div>
</template>

<script setup>
const code = `const array = [1, 2, 3, 4, 5]

array.fillWith(0, 8)

console.log(array)`

const code2 = `[1, 2, 3, 4, 5, 0, 0, 0]`

</script>

<style>
h2,
h3 {
  margin-bottom: 1em;
}

p {
  font-size: 14px;
  margin-bottom: 0.5em;
}
</style>