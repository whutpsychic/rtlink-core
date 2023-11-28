<template>
  <div class="page-container">
    <div class="main-content">
      <h2>{{ `Array<String>` }}</h2>
      <h3>genDatesArr(startDate: [ String? | Date? | Dayjs? ], n: number, direct: Boolean) 生成日期数组</h3>
      <h4>Default: startDate = new Date(), n = 7, direct = false</h4>
      <p>生成一个以某天为起始，之前n天或之后n天的字符串数组。当 direct 为 true 时向后查数。</p>
      <highlightjs language="Javascript" :code="code" />
      <p class="result-spliter">********************* 运行结果 *********************</p>
      <highlightjs language="Javascript" :code="code2" />
    </div>
  </div>
</template>

<script setup>
const code = `import { genDatesArr } from "rtlink-core";
import dayjs from "dayjs";

// run in 2023-11-27
const arr1 = genDatesArr();
const arr2 = genDatesArr('2023-01-01', 12);
const arr3 = genDatesArr(dayjs('2023-02-07'), 10);
const arr4 = genDatesArr(null, null, true);
const arr5 = genDatesArr('2023-01-01', 12, true);
const arr6 = genDatesArr(dayjs('2023-02-07'), 10, true);

console.log(arr1)
console.log(arr2)
console.log(arr3)
console.log(arr4)
console.log(arr5)
console.log(arr6)`

const code2 = `[
    "2023-11-21",
    "2023-11-22",
    "2023-11-23",
    "2023-11-24",
    "2023-11-25",
    "2023-11-26",
    "2023-11-27"
]
[
    "2022-12-21",
    "2022-12-22",
    "2022-12-23",
    "2022-12-24",
    "2022-12-25",
    "2022-12-26",
    "2022-12-27",
    "2022-12-28",
    "2022-12-29",
    "2022-12-30",
    "2022-12-31",
    "2023-01-01"
]
[
    "2023-01-29",
    "2023-01-30",
    "2023-01-31",
    "2023-02-01",
    "2023-02-02",
    "2023-02-03",
    "2023-02-04",
    "2023-02-05",
    "2023-02-06",
    "2023-02-07"
]
[
    "2023-11-27",
    "2023-11-28",
    "2023-11-29",
    "2023-11-30",
    "2023-12-01",
    "2023-12-02",
    "2023-12-03"
]
[
    "2023-01-01",
    "2023-01-02",
    "2023-01-03",
    "2023-01-04",
    "2023-01-05",
    "2023-01-06",
    "2023-01-07",
    "2023-01-08",
    "2023-01-09",
    "2023-01-10",
    "2023-01-11",
    "2023-01-12"
]
[
    "2023-02-07",
    "2023-02-08",
    "2023-02-09",
    "2023-02-10",
    "2023-02-11",
    "2023-02-12",
    "2023-02-13",
    "2023-02-14",
    "2023-02-15",
    "2023-02-16"
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