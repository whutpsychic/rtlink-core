<template>
  <div class="page-container">
    <div class="main-content">
      <h2>Boolean</h2>
      <h3>Array.prototype.contains(obj: any) 检测是否包含子项（浅比较）</h3>
      <p>返回布尔值 true/false，检测某个数组中是否包含子项 obj。</p>
      <highlightjs language="Javascript" :code="code" />
      <p class="result-spliter">********************* 运行结果 *********************</p>
      <highlightjs language="Javascript" :code="code2" />
    </div>
  </div>
</template>

<script setup>
const code = `const array = [1, 2, 3, 4, 5]

const got3 = array.contains(3)
const got8 = array.contains(8)

console.log(got3)
console.log(got8)`

const code2 = `true
false`

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