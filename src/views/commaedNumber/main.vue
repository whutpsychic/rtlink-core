<template>
  <div class="page-content-container">
    <h2>{{ 'String' }}</h2>
    <h2>commaedNumber(number) 西化数字显示</h2>
    <h4>number = Number </h4>
    <p>返回一个千位用逗号隔开的数字符串</p>
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
        `import { commaedNumber } from "rtlink-core";

const result1 = commaedNumber(237589283076589);
const result2 = commaedNumber(112354237028305.78);
const result3 = commaedNumber(51234583097.786798);

console.log(result1);
console.log(result2);
console.log(result3);`,
      result:
        `"23,758,928,307"
"11,235,423,702.78"
"5,123,458.7868"`
    }
  }
}

</script>


<style scoped>
p {
  font-size: 15px;
}
</style>