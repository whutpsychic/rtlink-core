import{_ as r,r as a,o as _,c as m,a as c,p as l,b as d,d as e}from"./index-bffb577c.js";const p={data(){return{code:`import moment from 'moment';
import { genMonthsArr } from 'rtlink-core';        

const arr1 = genMonthsArr(moment('2023-01'), 12);
const arr2 = genMonthsArr(moment('2023-02'), 10);

console.log(arr1);
console.log(arr2);`,result:`// 运行结果
[ '2022-02', '2022-03', '2022-04', '2022-05', '2022-06', '2022-07', '2022-08', '2022-09', '2022-10', '2022-11', '2022-12', '2023-01' ]
[ '2022-05', '2022-06', '2022-07', '2022-08', '2022-09', '2022-10', '2022-11', '2022-12', '2023-01', '2023-02' ]`}}},n=o=>(l("data-v-c49e726b"),o=o(),d(),o),h={class:"page-content-container"},i=n(()=>e("h2",null,"genMonthsArr(month, num) 生成月份数组",-1)),u=n(()=>e("h4",null,"month = moment(), num = 7",-1)),g=n(()=>e("p",null,"默认生成一个从本月起向前推7天的月份字符串数组。month 是一个 moment 类型的数据，num 表示向前推算多少个月。",-1));function f(o,v,b,j,t,x){const s=a("highlightjs");return _(),m("div",h,[i,u,g,c(s,{language:"js",code:t.code},null,8,["code"]),c(s,{language:"js",code:t.result},null,8,["code"])])}const I=r(p,[["render",f],["__scopeId","data-v-c49e726b"]]);export{I as default};
