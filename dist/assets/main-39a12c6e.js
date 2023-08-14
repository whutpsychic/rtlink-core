import{_ as c,r,o as d,c as _,a as l,p as i,b as u,d as e,t as s}from"./index-2736cbd4.js";const p={data(){return{code:`import { execCascaderData } from "rtlink-core";

const dataArr = [{ name: "name1", value: "value1", options: [{ name: "name2", value: "value2" }] }];
const newData = execCascaderData(dataArr, { labelStr: 'name', childStr: "options" });

console.log(newData);`,result:`[
  { label: "name1", 
    value: "value1", 
    children: [
      { label: "name2", value: "value2" }
    ] 
  }
]`}}},a=t=>(i("data-v-52ebe952"),t=t(),u(),t),h={class:"page-content-container"},m=a(()=>e("h2",null,s("Array"),-1)),v=a(()=>e("h2",null,"execCascaderData(data, option) 整理 cascader 数据",-1)),g=a(()=>e("h4",null,'data, option = { labelStr: "label", valueStr: "value", childStr: "children" }',-1)),b=a(()=>e("p",null,"返回一个经过整理后的数组。将树形数据整理为符合 element-ui 中 "+s(" < Cascader /> ")+" 类型的最简数据。data 是输入对象，option 是配置项。填充数据时常用。 ",-1)),S=a(()=>e("p",null,"由于服务端接口返回的数据命名时常不同，因此产生了本函数用于规范数据并对接于 element-ui。",-1)),f=a(()=>e("p",null," ************** 运行结果 ************** ",-1));function x(t,D,C,j,o,y){const n=r("highlightjs");return d(),_("div",h,[m,v,g,b,S,l(n,{language:"js",code:o.code},null,8,["code"]),f,l(n,{language:"js",code:o.result},null,8,["code"])])}const k=c(p,[["render",x],["__scopeId","data-v-52ebe952"]]);export{k as default};
