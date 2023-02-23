<template>
  <div class="page-content-container">
    <h2>finalDo(fn) 最后执行</h2>
    <h4>fn = Function </h4>
    <p>在 js 线程中，最后执行 fn 函数。不返回任何结果。</p>
    <highlightjs language="js" :code="code" />
  </div>
</template>
<script>

export default {
  data() {
    return {
      code: 
`finalDo(()=>{
  ...
});`,
    }
  }
}

</script>


<style scoped>
p {
  font-size: 15px;
}
</style>