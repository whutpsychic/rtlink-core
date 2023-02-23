<template>
  <div class="page-content-container">
    <h2>genRandomNumber(min, max, fixed, num) 生成随机数</h2>
    <h4>min = 0, max = 100, fixed = 0, num = 1</h4>
    <p>默认生成一个 0-100 的随机整数。min 为最小值，max 为最大值，fixed 为精确到小数点后几位，num 表示要生成几个。当 num 为1时，返回一个数字，当 num 大于1时返回一个数组</p>
    <highlightjs language="js" :code="code" />
  </div>
</template>
<script>

export default {
  data() {
    return {
      code:
        `import { genRandomNumber } from 'rtlink-core';

const num = genRandomNumber(0, 1000, 2);
const numArr = genRandomNumber(0, 1000, 2, 3);

console.log(num);
console.log(numArr);`,
    }
  }
}

</script>

<style scoped>
p {
  font-size: 15px;
}
</style>