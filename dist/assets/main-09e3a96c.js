import{_ as a,r as c,o as l,c as _,a as r,p as d,b as p,d as e,t as i}from"./index-1fc7690c.js";const u={data(){return{code:`import { genNumberStream } from "rtlink-core";        

const arr1 = genNumberStream();
const arr2 = genNumberStream(2, 5, 3);

console.log(arr1);
console.log(arr2);`,result:`[1, 2, 3, 4, 5, 6, 7]
[2, 5, 8, 11, 14]`}}},t=o=>(d("data-v-20120d01"),o=o(),p(),o),h={class:"page-content-container"},g=t(()=>e("h2",null,i("Array<Number>"),-1)),m=t(()=>e("h2",null,"genNumberStream(start, length, spliter) 生成数字序列",-1)),S=t(()=>e("h4",null,"start = 1, length = 7, spliter = 1",-1)),f=t(()=>e("p",null,"默认生成一个 1-7 的数组。start 是起始数字，length 表示生成的数组的长度，spliter 表示数列等差值",-1)),N=t(()=>e("p",null," ************** 运行结果 ************** ",-1));function b(o,v,j,x,s,y){const n=c("highlightjs");return l(),_("div",h,[g,m,S,f,r(n,{language:"js",code:s.code},null,8,["code"]),N,r(n,{language:"js",code:s.result},null,8,["code"])])}const k=a(u,[["render",b],["__scopeId","data-v-20120d01"]]);export{k as default};
