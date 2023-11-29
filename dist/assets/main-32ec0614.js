import{r as t,o as c,c as n,a as e,b as s}from"./index-0d50b54c.js";const a={class:"page-container"},r={class:"main-content"},l=e("h2",null,"String",-1),m=e("h3",null,"commaedNumber(number: Number) 西化数字显示",-1),_=e("p",null,"返回一个千位用逗号隔开的数字符串。",-1),i=e("p",{class:"result-spliter"},"********************* 运行结果 *********************",-1),u=`import { commaedNumber } from "rtlink-core";

const result1 = commaedNumber(237589283076589);
const result2 = commaedNumber(112354237028305.78);
const result3 = commaedNumber(51234583097.786798);

console.log(result1);
console.log(result2);
console.log(result3);`,d=`"23,758,928,307"
"11,235,423,702.78"
"5,123,458.7868"`,N={__name:"main",setup(p){return(h,g)=>{const o=t("highlightjs");return c(),n("div",a,[e("div",r,[l,m,_,s(o,{language:"Javascript",code:u}),i,s(o,{language:"Javascript",code:d})])])}}};export{N as default};
