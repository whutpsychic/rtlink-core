<template>
  <div class="page-container">
    <div class="main-content">
      <h2>{{ `Number | Array<Number>` }}</h2>
      <h3>genRandomNumber(min: Numebr?, max: Number?, num: Number?, fixed: Number?) 生成随机数</h3>
      <h4>Default: min = 0, max = 100, num = 1, fixed = 0</h4>
      <p>默认生成一个随机数；当 num > 1 时生成的结果是一个随机数组。min，max 标明生的随机数的范围，fixed 表示保留小数点后几位，默认返回整数。</p>
      <highlightjs language="Javascript" :code="code" />
      <p class="result-spliter">********************* 运行结果 *********************</p>
      <highlightjs language="Javascript" :code="code2" />
    </div>
  </div>
</template>

<script setup>
const code = `import { genRandomNumber } from "rtlink-core";

const num1 = genRandomNumber();
const num2 = genRandomNumber(0, 1000);
const arr1 = genRandomNumber(100, 1000, 2);
const arr2 = genRandomNumber(500, 1000, 2, 2)

console.log(num1);
console.log(num2);
console.log(arr1);
console.log(arr2);`

const code2 = `
// 动态结果
4
386
[238, 453]
[969.08, 594.1]`

</script>

<style>
h2,
h3,
h4 {
  margin-bottom: 1em;
}

p {
  font-size: 14px;
  margin-bottom: 0.5em;
}
</style>