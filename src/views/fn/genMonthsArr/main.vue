<template>
  <div class="page-container">
    <div class="main-content">
      <h2>{{ `Array<String>` }}</h2>
      <h3>genMonthsArr(startMonth: [ String? | Date? | Dayjs? ], n: number, direct: Boolean) 生成月份数组</h3>
      <h4>Default: startMonth = new Date(), n = 7, direct = false</h4>
      <p>生成一个以某天为起始，之前n个月或之后n个月的字符串数组。当 direct 为 true 时向后查数。</p>
      <highlightjs language="Javascript" :code="code" />
      <p class="result-spliter">********************* 运行结果 *********************</p>
      <highlightjs language="Javascript" :code="code2" />
    </div>
  </div>
</template>

<script setup>
const code = `import { genMonthsArr } from "rtlink-core";
import dayjs from "dayjs";

// run in 2023-11-27
const arr1 = genMonthsArr();
const arr2 = genMonthsArr('2023-01', 11);
const arr3 = genMonthsArr(dayjs('2023-10'), 8);
const arr4 = genMonthsArr(null, null, true);
const arr5 = genMonthsArr('2023-01', 12, true);
const arr6 = genMonthsArr(dayjs('2023-06'), 10, true);

console.log(arr1)
console.log(arr2)
console.log(arr3)
console.log(arr4)
console.log(arr5)
console.log(arr6)`

const code2 = `[
    "2023-05",
    "2023-06",
    "2023-07",
    "2023-08",
    "2023-09",
    "2023-10",
    "2023-11"
]
[
    "2022-03",
    "2022-04",
    "2022-05",
    "2022-06",
    "2022-07",
    "2022-08",
    "2022-09",
    "2022-10",
    "2022-11",
    "2022-12",
    "2023-01"
]
[
    "2023-03",
    "2023-04",
    "2023-05",
    "2023-06",
    "2023-07",
    "2023-08",
    "2023-09",
    "2023-10"
]
[
    "2023-11",
    "2023-12",
    "2024-01",
    "2024-02",
    "2024-03",
    "2024-04",
    "2024-05"
]
[
    "2023-01",
    "2023-02",
    "2023-03",
    "2023-04",
    "2023-05",
    "2023-06",
    "2023-07",
    "2023-08",
    "2023-09",
    "2023-10",
    "2023-11",
    "2023-12"
]
[
    "2023-06",
    "2023-07",
    "2023-08",
    "2023-09",
    "2023-10",
    "2023-11",
    "2023-12",
    "2024-01",
    "2024-02",
    "2024-03"
]`

</script>

<style>
h2,
h3,
h4 {
  margin-bottom: 1em;
}

p {
  font-size: 14px;
  margin-bottom: 0.5em;
}
</style>