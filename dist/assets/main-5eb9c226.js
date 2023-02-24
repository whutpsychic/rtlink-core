import{_ as s,r as l,o as i,c,a as r,p,b as d,d as e,t as _}from"./index-995b63a6.js";const u={data(){return{code:`import moment from "moment";
import { buildTableQueryParams } from "rtlink-core";

const condition = buildTableQueryParams({
  pageBean: {
    page: 1,
    pageSize: 10,
    total: 0
  }
}, {
  treeIds: { operation: "EQUAL", relation: "AND", value: "treeIds" },
  cycleType: { operation: "EQUAL", relation: "AND", value: "cycleType" },
  start: { operation: "EQUAL", relation: "AND", value: moment().format("YYYY-MM-DD 00:00:00") },
  end: { operation: "EQUAL", relation: "AND", value: moment().format("YYYY-MM-DD 23:59:59") },
})

console.log(condition)`,result:`{
  pageBean: {
    page: 1,
    pageSize: 10,
    total: 0
  },
  querys: [
    {
      property: 'treeIds', 
      value: 'treeIds', 
      operation: 'EQUAL', 
      relation: 'AND'
    },
    {
      property: 'cycleType', 
      value: 'cycleType', 
      operation: 'EQUAL', 
      relation: 'AND'
    },
    {
      property: 'start', 
      value: '2023-02-23 00: 00: 00', 
      operation: 'EQUAL', 
      relation: 'AND'
    },
    {
      property: 'end', 
      value: '2023-02-23 23: 59: 59', 
      operation: 'EQUAL', 
      relation: 'AND'
    }
  ]
}`}}},o=t=>(p("data-v-2deb0bf0"),t=t(),d(),t),m={class:"page-content-container"},h=o(()=>e("h2",null,_("Object"),-1)),y=o(()=>e("h2",null,"buildTableQueryParams(baseParams, extraConditions) 构造表格查询条件的传参",-1)),b=o(()=>e("h4",null,"baseParams = Object, extraConditions = Object",-1)),g=o(()=>e("h4",null,"baseParams = { querys = [], pageBean = {}, sorter = {} }, extraConditions = {}",-1)),A=o(()=>e("p",null,"返回一个固定对象。包含查询时的必要参数，可添加额外的传参。",-1)),v=o(()=>e("p",null," ************** 运行结果 ************** ",-1));function f(t,D,Q,N,a,E){const n=l("highlightjs");return i(),c("div",m,[h,y,b,g,A,r(n,{language:"js",code:a.code},null,8,["code"]),v,r(n,{language:"js",code:a.result},null,8,["code"])])}const L=s(u,[["render",f],["__scopeId","data-v-2deb0bf0"]]);export{L as default};
