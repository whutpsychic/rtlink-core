<template>
  <div class="page-container">
    <div class="main-content">
      <h2>{{ `Array<String>` }}</h2>
      <h3>genYearsArr(startYear: [ String? | Date? | Dayjs? ], n: number, direct: Boolean) 生成年份数组</h3>
      <h4>Default: startYear = new Date(), n = 7, direct = false</h4>
      <p>生成一个以某年为起始，之前n年或之后n年的字符串数组。当 direct 为 true 时向后查数。</p>
      <highlightjs language="Javascript" :code="code" />
      <p class="result-spliter">********************* 运行结果 *********************</p>
      <highlightjs language="Javascript" :code="code2" />
    </div>
  </div>
</template>

<script setup>

const code = `import { genYearsArr } from "rtlink-core";
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
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023"
]
[
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023"
]
[
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023"
]
[
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029"
]
[
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032",
    "2033",
    "2034"
]
[
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032"
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