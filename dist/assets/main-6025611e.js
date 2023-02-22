import{_ as s,r as d,o as a,c as r,a as _,p as l,b as p,d as o}from"./index-bffb577c.js";const h={data(){return{code:`import { genRandomCode } from 'rtlink-core';        

const code1 = genRandomCode("CHAR", 10);
const code2 = genRandomCode("char", 8);

console.log(code1);
console.log(code2);`,result:`// 运行结果
`}}},n=e=>(l("data-v-9f3d61f5"),e=e(),p(),e),i={class:"page-content-container"},m=n(()=>o("h2",null,"genRandomCode(type, length) 生成随机编码",-1)),g=n(()=>o("h4",null,' length = 7, type = "number" | "CHAR" | "char" | "random"',-1)),u=n(()=>o("p",null,"默认生成一个 7 位的纯数字字符串编码。length 时生成的编码长度，type 表示编码类型。为 number 时是纯数字，为 CHAR 时是纯大写英文字符，为 char 时是纯小写英文字符，为 random 时是全混合式的随机编码",-1));function f(e,C,R,v,t,y){const c=d("highlightjs");return a(),r("div",i,[m,g,u,_(c,{language:"js",code:t.code},null,8,["code"])])}const I=s(h,[["render",f],["__scopeId","data-v-9f3d61f5"]]);export{I as default};
