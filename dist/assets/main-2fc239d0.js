import{_ as r,r as l,o as _,c as d,a as c,p as i,b as p,d as e,t as n}from"./index-66c8d3fa.js";const u={data(){return{code:`import { formatCascaderParams } from "rtlink-core";

const formObj = { name: "name1", value: "value1", cas: [1, 2, 3, 4] };
const newObj = formatCascaderParams(formObj, ['cas']);

console.log(newObj);`,result:'{ name: "name1", value: "value1", cas: 4 }'}}},o=a=>(i("data-v-c1e39a2e"),a=a(),p(),a),m={class:"page-content-container"},h=o(()=>e("h2",null,n("Object"),-1)),g=o(()=>e("h2",null,"formatCascaderParams(obj, strArr) 格式化对象中值为 cascader 类型的数据",-1)),j=o(()=>e("h4",null,n("obj = Object, strArr = Array<String>"),-1)),f=o(()=>e("p",null,"返回一个深克隆的新对象。obj 是输入对象，strArr 是要处理的字段名。常用于整理表单数据格式。",-1)),b=o(()=>e("p",null," ************** 运行结果 ************** ",-1));function v(a,O,S,x,s,y){const t=l("highlightjs");return _(),d("div",m,[h,g,j,f,c(t,{language:"js",code:s.code},null,8,["code"]),b,c(t,{language:"js",code:s.result},null,8,["code"])])}const C=r(u,[["render",v],["__scopeId","data-v-c1e39a2e"]]);export{C as default};
