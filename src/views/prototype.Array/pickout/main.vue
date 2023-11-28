<template>
  <div class="page-container">
    <div class="main-content">
      <h2>void</h2>
      <h3>Array.prototype.pickout(obj: any) 将某项从数组中摘除（浅比较）</h3>
      <p>没有返回值，且改变原数组。将数组中的某项剔除出去。</p>
      <highlightjs language="Javascript" :code="code" />
      <p class="result-spliter">********************* 运行结果 *********************</p>
      <highlightjs language="Javascript" :code="code2" />
    </div>
  </div>
</template>

<script setup>
const code = `const array = [1, 2, 3, 4, 5]

array.pickout(2)

console.log(array)`

const code2 = `[ 1, 3, 4, 5 ]`

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