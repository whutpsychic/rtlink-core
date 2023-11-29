import{r as o,o as t,c as s,a as r,b as n,t as a}from"./index-0d50b54c.js";const c={class:"page-container"},l={class:"main-content"},i=r("h2",null,a("Array<String>"),-1),_=r("h3",null,"genYearsArr(startYear: [ String? | Date? | Dayjs? ], n: number, direct: Boolean) 生成年份数组",-1),g=r("h4",null,"Default: startYear = new Date(), n = 7, direct = false",-1),d=r("p",null,"生成一个以某年为起始，之前n年或之后n年的字符串数组。当 direct 为 true 时向后查数。",-1),h=r("p",{class:"result-spliter"},"********************* 运行结果 *********************",-1),u=`import { genYearsArr } from "rtlink-core";
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
console.log(arr6)`,p=`[
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
]`,j={__name:"main",setup(m){return(y,A)=>{const e=o("highlightjs");return t(),s("div",c,[r("div",l,[i,_,g,d,n(e,{language:"Javascript",code:u}),h,n(e,{language:"Javascript",code:p})])])}}};export{j as default};
