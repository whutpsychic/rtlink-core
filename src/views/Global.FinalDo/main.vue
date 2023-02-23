<template>
  <div class="page-content-container">
    <h2>finalDo(fn) 最后执行</h2>
    <h4>fn = Function </h4>
    <p>在 js 线程中，最后执行 fn 函数。不返回任何结果。</p>
    <p class="warning">【注意】本函数优先级不高于异步操作函数（如 Promise().then() 和 async/await等），仅能在同线程中运行的函数里生效。</p>
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
        `finalDo(() => {
  console.log(4)
})

console.log(1);
console.log(2);
console.log(3);`,
      result: `1
2
3
4`
    }
  }
}

</script>


<style scoped>
p {
  font-size: 15px;
}
</style>