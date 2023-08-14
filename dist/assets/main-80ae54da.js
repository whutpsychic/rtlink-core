import{_ as s,r as c,o as l,c as p,a as r,p as i,b as d,d as e,t as u}from"./index-2736cbd4.js";const _={data(){return{code:`import moment from "moment";
import { buildTableQueryParams } from "rtlink-core";

const condition = buildTableQueryParams({
  pageBean: {
    page: 1,
    pageSize: 10,
    total: 0
  }
}, {
  treeIds: { operation: "EQUAL", relation: "AND", value: "treeIds", group: "advance" },
  cycleType: { operation: "EQUAL", relation: "AND", value: "cycleType", group: "advance" },
  start: { operation: "EQUAL", relation: "AND", value: moment().format("YYYY-MM-DD 00:00:00"), group: "advance" },
  end: { operation: "EQUAL", relation: "AND", value: moment().format("YYYY-MM-DD 23:59:59"), group: "advance" },
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
      relation: 'AND', 
      group: 'advance'
    },
    {
      property: 'cycleType', 
      value: 'cycleType', 
      operation: 'EQUAL', 
      relation: 'AND', 
      group: 'advance'
    },
    {
      property: 'start', 
      value: '2023-02-23 00: 00: 00', 
      operation: 'EQUAL', 
      relation: 'AND', 
      group: 'advance'
    },
    {
      property: 'end', 
      value: '2023-02-23 23: 59: 59', 
      operation: 'EQUAL', 
      relation: 'AND', 
      group: 'advance'
    }
  ]
}`}}},o=a=>(i("data-v-21cb84c9"),a=a(),d(),a),m={class:"page-content-container"},g=o(()=>e("h2",null,u("Object"),-1)),v=o(()=>e("h2",null,"buildTableQueryParams(baseParams, extraConditions) 构造表格查询条件的传参",-1)),h=o(()=>e("h4",null,"baseParams = Object, extraConditions = Object",-1)),y=o(()=>e("h4",null,"baseParams = { querys = [], pageBean = {}, sorter = {} }, extraConditions = {}",-1)),b=o(()=>e("p",null,"返回一个固定对象。包含查询时的必要参数，可添加额外的传参。",-1)),A=o(()=>e("p",null," ************** 运行结果 ************** ",-1));function D(a,Q,f,N,t,E){const n=c("highlightjs");return l(),p("div",m,[g,v,h,y,b,r(n,{language:"js",code:t.code},null,8,["code"]),A,r(n,{language:"js",code:t.result},null,8,["code"])])}const L=s(_,[["render",D],["__scopeId","data-v-21cb84c9"]]);export{L as default};
