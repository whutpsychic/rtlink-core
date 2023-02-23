<template>
  <div class="page-content-container">
    <h2>genNumberStream(start, length, spliter) 生成数字序列</h2>
    <h4>start = 1, length = 7, spliter = 1</h4>
    <p>默认生成一个 1-7 的数组。start 是起始数字，length 表示生成的数组的长度，spliter 表示数列等差值</p>
    <highlightjs language="js" :code="code" />
    <highlightjs language="js" :code="result" />
  </div>
</template>
<script>

export default {
  data() {
    return {
      code:
        `import moment from 'moment';
import { genNumberStream } from 'rtlink-core';        

const arr1 = genNumberStream();
const arr2 = genNumberStream(2, 5, 3);

console.log(arr1);
console.log(arr2);`,
      result:
        `// 运行结果
[ 1, 2, 3, 4, 5, 6, 7 ]
[ 2, 5, 8, 11, 14 ]`
    }
  }
}

</script>

<style scoped>
p {
  font-size: 15px;
}
</style>