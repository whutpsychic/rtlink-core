import{_ as c,r as a,o as d,c as l,a as r,p as _,b as m,d as o,t as h}from"./index-2736cbd4.js";const i={data(){return{code:`import moment from "moment"
import { genMonthsArr } from "rtlink-core"

const arr1 = genMonthsArr();
const arr2 = genMonthsArr(moment('2023-01'), 12);
const arr3 = genMonthsArr(moment('2023-02'), 10);

console.log(arr1)
console.log(arr2)
console.log(arr3)`,result:`['2022-08', '2022-09', '2022-10', '2022-11', '2022-12', '2023-01', '2023-02']
['2022-02', '2022-03', '2022-04', '2022-05', '2022-06', '2022-07', '2022-08', '2022-09', '2022-10', '2022-11', '2022-12', '2023-01']
['2022-05', '2022-06', '2022-07', '2022-08', '2022-09', '2022-10', '2022-11', '2022-12', '2023-01', '2023-02']`}}},e=n=>(_("data-v-dd1e6d93"),n=n(),m(),n),p={class:"page-content-container"},u=e(()=>o("h2",null,h("Array<String>"),-1)),g=e(()=>o("h2",null,"genMonthsArr(month, num) 生成月份数组",-1)),f=e(()=>o("h4",null,"month = moment(), num = 7",-1)),v=e(()=>o("p",null,"默认生成一个从本月起向前推7天的月份字符串数组。month 是一个 moment 类型的数据，num 表示向前推算多少个月。",-1)),A=e(()=>o("p",null," ************** 运行结果 ************** ",-1));function M(n,S,j,x,t,y){const s=a("highlightjs");return d(),l("div",p,[u,g,f,v,r(s,{language:"js",code:t.code},null,8,["code"]),A,r(s,{language:"js",code:t.result},null,8,["code"])])}const k=c(i,[["render",M],["__scopeId","data-v-dd1e6d93"]]);export{k as default};
