import{_ as a,r as d,o as m,c as u,a as c,p as l,b as r,d as e,t as _}from"./index-f474f120.js";const i={data(){return{code:`import { genRandomNumber } from "rtlink-core"

const num1 = genRandomNumber();
const num2 = genRandomNumber(0, 1000, 0, 5);
const num3 = genRandomNumber(0, 1000, 2, 4);

console.log(num1)
console.log(num2)
console.log(num3)`,result:`44
[315, 434, 393, 174, 55]
[609.77, 499.04, 182.26, 153.25]`}}},n=o=>(l("data-v-66de54d9"),o=o(),r(),o),p={class:"page-content-container"},g=n(()=>e("h2",null,_("Number | Array<Number>"),-1)),h=n(()=>e("h2",null,"genRandomNumber(min, max, fixed, num) 生成随机数",-1)),f=n(()=>e("h4",null,"min = 0, max = 100, fixed = 0, num = 1",-1)),x=n(()=>e("p",null,"默认生成一个 0-100 的随机整数。min 为最小值，max 为最大值，fixed 为精确到小数点后几位，num 表示要生成几个。当 num 为1时，返回一个数字，当 num 大于1时返回一个数组",-1)),N=n(()=>e("p",null," ************** 运行结果 ************** ",-1));function b(o,v,R,j,s,y){const t=d("highlightjs");return m(),u("div",p,[g,h,f,x,c(t,{language:"js",code:s.code},null,8,["code"]),N,c(t,{language:"js",code:s.result},null,8,["code"])])}const S=a(i,[["render",b],["__scopeId","data-v-66de54d9"]]);export{S as default};
