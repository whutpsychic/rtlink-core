<template>
  <div class="page-content-container">
    <h2>genMonthsArr(month, num) 生成月份数组</h2>
    <h4>month = moment(), num = 7</h4>
    <p>默认生成一个从本月起向前推7天的月份字符串数组。month 是一个 moment 类型的数据，num 表示向前推算多少个月。</p>
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
        `import moment from "moment"
import { genMonthsArr } from "@/rtlink-core"

const arr1 = genMonthsArr();
const arr2 = genMonthsArr(moment('2023-01'), 12);
const arr3 = genMonthsArr(moment('2023-02'), 10);

console.log(arr1)
console.log(arr2)
console.log(arr3)`,
      result:
        `['2022-08', '2022-09', '2022-10', '2022-11', '2022-12', '2023-01', '2023-02']
['2022-02', '2022-03', '2022-04', '2022-05', '2022-06', '2022-07', '2022-08', '2022-09', '2022-10', '2022-11', '2022-12', '2023-01']
['2022-05', '2022-06', '2022-07', '2022-08', '2022-09', '2022-10', '2022-11', '2022-12', '2023-01', '2023-02']`
    }
  }
}

</script>

<style scoped>
p {
  font-size: 15px;
}
</style>