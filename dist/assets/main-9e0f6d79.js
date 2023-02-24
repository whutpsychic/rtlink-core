import{_ as d,r as a,o as l,c as r,a as s,p as _,b as p,d as o,t as h}from"./index-66c8d3fa.js";const i={data(){return{code:`import { genRandomCode } from "rtlink-core";

const code1 = genRandomCode();
const code2 = genRandomCode("number", 8);
const code3 = genRandomCode("CHAR", 8);
const code4 = genRandomCode("char", 8);

console.log(code1);
console.log(code2);
console.log(code3);
console.log(code4);`,result:`9299567
06939069
HCHICJBJ
hhhcibbf
`}}},e=n=>(_("data-v-9c5573f2"),n=n(),p(),n),g={class:"page-content-container"},u=e(()=>o("h2",null,h("String"),-1)),m=e(()=>o("h2",null,"genRandomCode(type, length) 生成随机编码",-1)),C=e(()=>o("h4",null,' length = 7, type = "random" | "number" | "CHAR" | "char" ',-1)),f=e(()=>o("p",null,"默认生成一个 7 位的纯数字字符串编码。length 时生成的编码长度，type 表示编码类型。为 number 时是纯数字，为 CHAR 时是纯大写英文字符，为 char 时是纯小写英文字符，为 random 时是全混合式的随机编码",-1)),R=e(()=>o("p",null," ************** 运行结果 ************** ",-1));function b(n,v,y,H,c,I){const t=a("highlightjs");return l(),r("div",g,[u,m,C,f,s(t,{language:"js",code:c.code},null,8,["code"]),R,s(t,{language:"js",code:c.result},null,8,["code"])])}const j=d(i,[["render",b],["__scopeId","data-v-9c5573f2"]]);export{j as default};
