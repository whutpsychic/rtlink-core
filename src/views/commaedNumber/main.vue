<template>
  <div class="page-content-container">
    <h2>commaedNumber(number) 西化数字显示</h2>
    <h4>number = Number </h4>
    <p>返回一个千位用逗号隔开的数字符串</p>
    <highlightjs language="js" :code="code" />
    <highlightjs language="js" :code="result" />
  </div>
</template>
<script >

export default {
  data() {
    return {
      code: 
`import { commaedNumber } from 'rtlink-core';

const result = commaedNumber(83076589);

console.log(result);`,
      result: 
`// 运行结果
"83,076,589"
`
    }
  }
}

</script>


<style scoped>
p {
  font-size: 15px;
}
</style>