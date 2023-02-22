<template>
  <div class="page-content-container">
    <h2>genDatesArr(date, num) 生成日期数组</h2>
    <h4>date = moment(), num = 7</h4>
    <p>默认生成一个从今天起向前推7天的日期字符串数组。date 是一个 moment 类型的数据，num 表示向前推算多少天。</p>
    <highlightjs language="js" :code="code" />
    <highlightjs language="js" :code="result" />
  </div>
</template>
<script >

export default {
  data() {
    return {
      code:
        `import moment from 'moment';
import { genDatesArr } from 'rtlink-core';        

const arr1 = genDatesArr(moment('2023-01-01'), 12);
const arr2 = genDatesArr(moment('2023-02-07'), 10);

console.log(arr1);
console.log(arr2);`,
      result:
        `// 运行结果
[ '2022-12-21', '2022-12-22', '2022-12-23', '2022-12-24', '2022-12-25', '2022-12-26', '2022-12-27', '2022-12-28', '2022-12-29', '2022-12-30', '2022-12-31', '2023-01-01' ]
[ '2022-01-29', '2023-01-30', '2022-01-31', '2023-02-01', '2022-02-02', '2023-02-03', '2022-02-04', '2023-02-05', '2022-02-06', '2023-02-07' ]`
    }
  }
}

</script>

<style scoped>
p {
  font-size: 15px;
}
</style>