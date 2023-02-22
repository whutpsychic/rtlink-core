import{_ as r,r as c,o as _,c as l,a,p as d,b as m,d as o}from"./index-bffb577c.js";const p={data(){return{code:`import moment from 'moment';
import { genDatesArr } from 'rtlink-core';        

const arr1 = genDatesArr(moment('2023-01-01'), 12);
const arr2 = genDatesArr(moment('2023-02-07'), 10);

console.log(arr1);
console.log(arr2);`,result:`// 运行结果
[ '2022-12-21', '2022-12-22', '2022-12-23', '2022-12-24', '2022-12-25', '2022-12-26', '2022-12-27', '2022-12-28', '2022-12-29', '2022-12-30', '2022-12-31', '2023-01-01' ]
[ '2022-01-29', '2023-01-30', '2022-01-31', '2023-02-01', '2022-02-02', '2023-02-03', '2022-02-04', '2023-02-05', '2022-02-06', '2023-02-07' ]`}}},t=e=>(d("data-v-e54a1944"),e=e(),m(),e),i={class:"page-content-container"},u=t(()=>o("h2",null,"genDatesArr(date, num) 生成日期数组",-1)),g=t(()=>o("h4",null,"date = moment(), num = 7",-1)),h=t(()=>o("p",null,"默认生成一个从今天起向前推7天的日期字符串数组。date 是一个 moment 类型的数据，num 表示向前推算多少天。",-1));function f(e,v,j,x,n,A){const s=c("highlightjs");return _(),l("div",i,[u,g,h,a(s,{language:"js",code:n.code},null,8,["code"]),a(s,{language:"js",code:n.result},null,8,["code"])])}const I=r(p,[["render",f],["__scopeId","data-v-e54a1944"]]);export{I as default};
