<template>
  <div class="page-content-container">
    <h2>genRandomNumber(min, max, fixed, num) 生成随机数</h2>
    <h4>min = 0, max = 100, fixed = 0, num = 1</h4>
    <p>默认生成一个 0-100 的随机整数。min 为最小值，max 为最大值，fixed 为精确到小数点后几位，num 表示要生成几个。当 num 为1时，返回一个数字，当 num 大于1时返回一个数组</p>
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
        `import { genRandomNumber } from "@/rtlink-core"

const num1 = genRandomNumber();
const num2 = genRandomNumber(0, 1000, 0, 5);
const num3 = genRandomNumber(0, 1000, 2, 4);

console.log(num1)
console.log(num2)
console.log(num3)`,
      result: `44
[315, 434, 393, 174, 55]
[609.77, 499.04, 182.26, 153.25]`
    }
  }
}

</script>

<style scoped>
p {
  font-size: 15px;
}
</style>