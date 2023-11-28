<template>
  <div class="page-container">
    <div class="main-content">
      <h2>void</h2>
      <h3>finalDo(fn: Function) 最后执行</h3>
      <p>在 js 线程中，最后执行 fn 函数。不返回任何结果。</p>
      <div class="spliter" />
      <el-alert title="【注意】本函数优先级不高于异步操作函数（如 Promise().then() 和 async/await等），仅能在同线程中运行的函数里生效。" type="warning"
        :closable="false" />
      <div class="spliter" />
      <highlightjs language="Javascript" :code="code" />
      <p class="result-spliter">********************* 运行结果 *********************</p>
      <highlightjs language="Javascript" :code="code2" />
    </div>
  </div>
</template>

<script setup>
const code = `finalDo(()=>{
  console.log(4)
})
console.log(1)
console.log(2)
console.log(3)`

const code2 = `1
2
3
4`

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