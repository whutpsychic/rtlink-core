import{_ as c,r as a,o as d,c as m,a as r,p as _,b as i,d as n}from"./index-bffb577c.js";const u={data(){return{code:`import { genRandomNumber } from 'rtlink-core';

const num = genRandomNumber(0, 1000, 2);
const numArr = genRandomNumber(0, 1000, 2, 3);

console.log(num);
console.log(numArr);`}}},o=e=>(_("data-v-df600106"),e=e(),i(),e),l={class:"page-content-container"},p=o(()=>n("h2",null,"genRandomNumber(min, max, fixed, num) 生成随机数",-1)),h=o(()=>n("h4",null,"min = 0, max = 100, fixed = 0, num = 1",-1)),g=o(()=>n("p",null,"默认生成一个 0-100 的随机整数。min 为最小值，max 为最大值，fixed 为精确到小数点后几位，num 表示要生成几个。当 num 为1时，返回一个数字，当 num 大于1时返回一个数组",-1));function f(e,x,v,N,t,b){const s=a("highlightjs");return d(),m("div",l,[p,h,g,r(s,{language:"js",code:t.code},null,8,["code"])])}const R=c(u,[["render",f],["__scopeId","data-v-df600106"]]);export{R as default};
