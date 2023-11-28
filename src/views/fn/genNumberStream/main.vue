<template>
  <div class="page-container">
    <div class="main-content">
      <h2>{{ `Array<Number>` }}</h2>
      <h3>genNumberStream(start: Number?, length: Number?, spliter: Number?) 生成数字序列</h3>
      <h4>Default: start = 1, n = 7, spliter = 1</h4>
      <p>默认生成一个 1-7 的数组。start 是起始数字，length 表示生成的数组的长度，spliter 表示数列等差值。</p>
      <highlightjs language="Javascript" :code="code" />
      <p class="result-spliter">********************* 运行结果 *********************</p>
      <highlightjs language="Javascript" :code="code2" />
    </div>
  </div>
</template>

<script setup>
const code = `import { genNumberStream } from "rtlink-core";

const arr1 = genNumberStream();
const arr2 = genNumberStream(2);
const arr3 = genNumberStream(2, 5);
const arr4 = genNumberStream(2, 5, 3);

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);`

const code2 = `[ 1, 2, 3, 4, 5, 6, 7 ]
[ 2, 3, 4, 5, 6, 7, 8 ]
[ 2, 3, 4, 5, 6 ]
[ 2, 5, 8, 11, 14 ]`

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