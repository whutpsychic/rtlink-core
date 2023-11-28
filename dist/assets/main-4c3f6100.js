import{r as o,o as s,c as n,a as e,b as r,t as a}from"./index-0f28a4ff.js";const c={class:"page-container"},l={class:"main-content"},_=e("h2",null,a("Array<Number>"),-1),i=e("h3",null,"genNumberStream(start: Number?, length: Number?, spliter: Number?) 生成数字序列",-1),m=e("h4",null,"Default: start = 1, n = 7, spliter = 1",-1),u=e("p",null,"默认生成一个 1-7 的数组。start 是起始数字，length 表示生成的数组的长度，spliter 表示数列等差值。",-1),g=e("p",{class:"result-spliter"},"********************* 运行结果 *********************",-1),p=`import { genNumberStream } from "rtlink-core";

const arr1 = genNumberStream();
const arr2 = genNumberStream(2);
const arr3 = genNumberStream(2, 5);
const arr4 = genNumberStream(2, 5, 3);

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);`,h=`[ 1, 2, 3, 4, 5, 6, 7 ]
[ 2, 3, 4, 5, 6, 7, 8 ]
[ 2, 3, 4, 5, 6 ]
[ 2, 5, 8, 11, 14 ]`,S={__name:"main",setup(d){return(N,b)=>{const t=o("highlightjs");return s(),n("div",c,[e("div",l,[_,i,m,u,r(t,{language:"Javascript",code:p}),g,r(t,{language:"Javascript",code:h})])])}}};export{S as default};
