import{_ as s,r as u,o as c,c as r,a as l,p as i,b as m,d as e,t as d}from"./index-f474f120.js";const v={data(){return{code:`import { tilingTreeData } from "rtlink-core";

const dataArr = [
  {
    name: "name1", value: "value1", options: [
    { name: "name11", value: "value11" },
    { name: "name12", value: "value12" },
    { name: "name13", value: "value13" }
    ]
  },
  {
    name: "name2", value: "value2", options: [
      { name: "name21", value: "value21" }
    ]
  },
  {
    name: "name3", value: "value3", options: [
      { name: "name31", value: "value31" }
    ]
  },
];
const newData = tilingTreeData(dataArr, { labelStr: 'name', childStr: "options" });

console.log(newData);`,result:`[
  {name: 'name1', value: 'value1', options: Array(3)},
  {name: 'name11', value: 'value11'},
  {name: 'name12', value: 'value12'},
  {name: 'name13', value: 'value13'},
  {name: 'name2', value: 'value2', options: Array(1)},
  {name: 'name21', value: 'value21'},
  {name: 'name3', value: 'value3', options: Array(1)},
  {name: 'name31', value: 'value31'}
]`}}},a=n=>(i("data-v-6a68bdf0"),n=n(),m(),n),p={class:"page-content-container"},_=a(()=>e("h2",null,d("Array"),-1)),h=a(()=>e("h2",null,"tilingTreeData(data, option) 整理树形数据",-1)),g=a(()=>e("h4",null,'data, option = { childStr: "children" }',-1)),f=a(()=>e("p",null,"返回一个经过整理后的一维数组。将树形数据平铺后放在同一个数组中。data 是输入对象，option 是配置项。",-1)),y=a(()=>e("p",null," ************** 运行结果 ************** ",-1));function S(n,A,D,b,o,j){const t=u("highlightjs");return c(),r("div",p,[_,h,g,f,l(t,{language:"js",code:o.code},null,8,["code"]),y,l(t,{language:"js",code:o.result},null,8,["code"])])}const I=s(v,[["render",S],["__scopeId","data-v-6a68bdf0"]]);export{I as default};
