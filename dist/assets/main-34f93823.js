import{r as s,o as t,c as a,a as e,b as o,t as r}from"./index-0d50b54c.js";const c={class:"page-container"},m={class:"main-content"},l=e("h2",null,r("Number | Array<Number>"),-1),i=e("h3",null,"genRandomNumber(min: Numebr?, max: Number?, num: Number?, fixed: Number?) 生成随机数",-1),u=e("h4",null,"Default: min = 0, max = 100, num = 1, fixed = 0",-1),_=e("p",null,"默认生成一个随机数；当 num > 1 时生成的结果是一个随机数组。min，max 标明生的随机数的范围，fixed 表示保留小数点后几位，默认返回整数。",-1),d=e("p",{class:"result-spliter"},"********************* 运行结果 *********************",-1),g=`import { genRandomNumber } from "rtlink-core";

const num1 = genRandomNumber();
const num2 = genRandomNumber(0, 1000);
const arr1 = genRandomNumber(100, 1000, 2);
const arr2 = genRandomNumber(500, 1000, 2, 2)

console.log(num1);
console.log(num2);
console.log(arr1);
console.log(arr2);`,h=`
// 动态结果
4
386
[238, 453]
[969.08, 594.1]`,f={__name:"main",setup(p){return(N,b)=>{const n=s("highlightjs");return t(),a("div",c,[e("div",m,[l,i,u,_,o(n,{language:"Javascript",code:g}),d,o(n,{language:"Javascript",code:h})])])}}};export{f as default};
