import{_ as r,r as l,o as m,c as u,a as t,p as _,b as d,d as e,t as c}from"./index-2736cbd4.js";const i={data(){return{code:`import { format01Params } from "rtlink-core";

const formObj = { name: "name1", value: "value1", cas: true };
const formObj2 = { name: "name2", value: "value2", cas: false };
const formObj3 = { name: "name3", value: "value3", cas: 'true' };
const formObj4 = { name: "name4", value: "value4", cas: 'false' };

const newObj = format01Params(formObj, ['cas']);
const newObj2 = format01Params(formObj2, ['cas'], true);
const newObj3 = format01Params(formObj3, ['cas']);
const newObj4 = format01Params(formObj4, ['cas'], true);

console.log(newObj);
console.log(newObj2);
console.log(newObj3);
console.log(newObj4);`,result:`{name: 'name1', value: 'value1', cas: 1}
{name: 'name2', value: 'value2', cas: '0'}
{name: 'name3', value: 'value3', cas: 1}
{name: 'name4', value: 'value4', cas: '0'}`}}},a=o=>(_("data-v-958d5c5d"),o=o(),d(),o),j={class:"page-content-container"},p=a(()=>e("h2",null,c("Object"),-1)),f=a(()=>e("h2",null,"format01Params(obj, strArr, toString) 格式化对象中值为 cascader 类型的数据",-1)),b=a(()=>e("h4",null,c("obj = Object, strArr = Array<String>, toString = Boolean"),-1)),v=a(()=>e("p",null,"返回一个深克隆的新对象。obj 是输入对象，strArr 是要处理的字段名。toString 为 true 时输出字符串 '0'/'1'。常用于整理表单数据格式。",-1)),g=a(()=>e("p",null," ************** 运行结果 ************** ",-1));function h(o,O,w,S,s,P){const n=l("highlightjs");return m(),u("div",j,[p,f,b,v,t(n,{language:"js",code:s.code},null,8,["code"]),g,t(n,{language:"js",code:s.result},null,8,["code"])])}const y=r(i,[["render",h],["__scopeId","data-v-958d5c5d"]]);export{y as default};
