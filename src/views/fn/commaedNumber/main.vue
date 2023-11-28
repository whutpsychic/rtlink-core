<template>
  <div class="page-container">
    <div class="main-content">
      <h2>String</h2>
      <h3>commaedNumber(number: Number) 西化数字显示</h3>
      <p>返回一个千位用逗号隔开的数字符串。</p>
      <highlightjs language="Javascript" :code="code" />
      <p class="result-spliter">********************* 运行结果 *********************</p>
      <highlightjs language="Javascript" :code="code2" />
    </div>
  </div>
</template>

<script setup>
const code = `import { commaedNumber } from "rtlink-core";

const result1 = commaedNumber(237589283076589);
const result2 = commaedNumber(112354237028305.78);
const result3 = commaedNumber(51234583097.786798);

console.log(result1);
console.log(result2);
console.log(result3);`

const code2 = `"23,758,928,307"
"11,235,423,702.78"
"5,123,458.7868"`

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