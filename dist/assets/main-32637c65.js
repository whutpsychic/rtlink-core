import{_ as a,r as c,o as l,c as _,a as r,p,b as d,d as t}from"./index-bffb577c.js";const i={data(){return{code:`import moment from 'moment';
import { genNumberStream } from 'rtlink-core';        

const arr1 = genNumberStream();
const arr2 = genNumberStream(2, 5, 3);

console.log(arr1);
console.log(arr2);`,result:`// 运行结果
[ 1, 2, 3, 4, 5, 6, 7 ]
[ 2, 5, 8, 11, 14 ]`}}},o=e=>(p("data-v-af84310a"),e=e(),d(),e),m={class:"page-content-container"},u=o(()=>t("h2",null,"genNumberStream(start, length, spliter) 生成数字序列",-1)),g=o(()=>t("h4",null,"start = 1, length = 7, spliter = 1",-1)),h=o(()=>t("p",null,"默认生成一个 1-7 的数组。start 是起始数字，length 表示生成的数组的长度，spliter 表示数列等差值",-1));function f(e,S,v,N,s,b){const n=c("highlightjs");return l(),_("div",m,[u,g,h,r(n,{language:"js",code:s.code},null,8,["code"]),r(n,{language:"js",code:s.result},null,8,["code"])])}const x=a(i,[["render",f],["__scopeId","data-v-af84310a"]]);export{x as default};
