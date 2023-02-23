<template>
  <div class="page-content-container">
    <h2>Array.prototype.contains(obj) 检测是否包含子项（浅比较）</h2>
    <h4>obj = anyType </h4>
    <p>返回布尔值 true/false，检测某个数组中是否包含子项 obj。</p>
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
        `const array = [1, 2, 3, 4, 5]

const got3 = array.contains(3)
const got8 = array.contains(8)

console.log(got3)
console.log(got8)`,
      result: `true
false`
    }
  }
}

</script>


<style scoped>
p {
  font-size: 15px;
}
</style>