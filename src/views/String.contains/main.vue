<template>
  <div class="page-content-container">
    <h2>String.prototype.contains(substr) 检测是否包含子字符串</h2>
    <h4>substr = String </h4>
    <p>返回布尔值 true/false，检测某个字符串中是否包含子串 substr。</p>
    <highlightjs language="js" :code="code" />
    <highlightjs language="js" :code="result" />
  </div>
</template>
<script >

export default {
  data() {
    return {
      code:
        `const str = "hello babe!"

const gotHello = str.contains("hello")

console.log(gotHello)`,
      result: `// 运行结果
true`
    }
  }
}

</script>


<style scoped>
p {
  font-size: 15px;
}
</style>