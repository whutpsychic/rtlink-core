<template>
  <div class="page-container">
    <div class="main-content">
      <h2>Boolean</h2>
      <h3>isWeixin() 判断微信环境</h3>
      <p>判断当前网页是不是在微信内置的浏览器环境打开的。</p>
      <highlightjs language="Javascript" :code="code" />
      <p class="result-spliter">********************* 运行结果 *********************</p>
      <highlightjs language="Javascript" :code="code2" />
    </div>
  </div>
</template>

<script setup>

const code = `import { isWeixin } from "rtlink-core";

const runtime = isWeixin();

console.log(runtime)`

const code2 = `// 视情况而定 
false`

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