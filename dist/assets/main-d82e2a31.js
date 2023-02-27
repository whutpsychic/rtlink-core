import{_ as l,r,o as d,c as i,a as s,p as _,b as p,d as e,t as c}from"./index-1a03585d.js";const u={data(){return{code:`import { execTreeData } from "rtlink-core";

const dataArr = [{ name: "name1", value: "value1", options: [{ name: "name2", value: "value2" }] }];
const newData = execTreeData(dataArr, { labelStr: 'name', childStr: "options" });

console.log(newData);`,result:`[
  { 
    children: [{…}],
    label: "name1",
    name: "name1",
    options: [{…}],
    value: "value1"
  }
]`}}},a=t=>(_("data-v-38ba5dc5"),t=t(),p(),t),h={class:"page-content-container"},m=a(()=>e("h2",null,c("Array"),-1)),v=a(()=>e("h2",null,"execTreeData(data, option) 整理树形数据",-1)),g=a(()=>e("h4",null,'data, option = { labelStr: "label", valueStr: "value", childStr: "children" }',-1)),S=a(()=>e("p",null,"返回一个经过整理后的数组。将树形数据整理为符合 element-ui 中 "+c("<tree/>")+" 类型的完整数据。data 是输入对象，option 是配置项。填充数据时常用。",-1)),b=a(()=>e("p",null,"由于服务端接口返回的数据命名时常不同，因此产生了本函数用于规范数据并对接于 element-ui。这个函数与 execCascaderData 的不同点在于输出数据，保留了服务端返回的所有数据，确保在点击树节点取数据时的方便性。",-1)),x=a(()=>e("p",null," ************** 运行结果 ************** ",-1));function f(t,D,j,y,o,I){const n=r("highlightjs");return d(),i("div",h,[m,v,g,S,b,s(n,{language:"js",code:o.code},null,8,["code"]),x,s(n,{language:"js",code:o.result},null,8,["code"])])}const w=l(u,[["render",f],["__scopeId","data-v-38ba5dc5"]]);export{w as default};
