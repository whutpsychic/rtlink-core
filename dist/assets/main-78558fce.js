import{_ as l,r,o as a,c as _,a as n,p as u,b as d,d as e,t as m}from"./index-995b63a6.js";const i={data(){return{code:`import { commaedNumber } from "rtlink-core";

const result1 = commaedNumber(237589283076589);
const result2 = commaedNumber(112354237028305.78);
const result3 = commaedNumber(51234583097.786798);

console.log(result1);
console.log(result2);
console.log(result3);`,result:`"23,758,928,307"
"11,235,423,702.78"
"5,123,458.7868"`}}},o=s=>(u("data-v-295b93cc"),s=s(),d(),s),p={class:"page-content-container"},h=o(()=>e("h2",null,m("String"),-1)),g=o(()=>e("h2",null,"commaedNumber(number) 西化数字显示",-1)),b=o(()=>e("h4",null,"number = Number ",-1)),N=o(()=>e("p",null,"返回一个千位用逗号隔开的数字符串",-1)),f=o(()=>e("p",null," ************** 运行结果 ************** ",-1));function v(s,S,j,x,t,I){const c=r("highlightjs");return a(),_("div",p,[h,g,b,N,n(c,{language:"js",code:t.code},null,8,["code"]),f,n(c,{language:"js",code:t.result},null,8,["code"])])}const y=l(i,[["render",v],["__scopeId","data-v-295b93cc"]]);export{y as default};
