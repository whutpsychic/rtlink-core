import{r as t,o as n,c,a as e,b as s}from"./index-af87bf53.js";const i={class:"page-container"},a={class:"main-content"},_=e("h2",null,"Boolean",-1),l=e("h3",null,"isWeixin() 判断微信环境",-1),r=e("p",null,"判断当前网页是不是在微信内置的浏览器环境打开的。",-1),d=e("p",{class:"result-spliter"},"********************* 运行结果 *********************",-1),p=`import { isWeixin } from "rtlink-core";

const runtime = isWeixin();

console.log(runtime)`,h=`// 视情况而定 
false`,x={__name:"main",setup(m){return(u,g)=>{const o=t("highlightjs");return n(),c("div",i,[e("div",a,[_,l,r,s(o,{language:"Javascript",code:p}),d,s(o,{language:"Javascript",code:h})])])}}};export{x as default};
