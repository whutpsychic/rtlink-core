import{_ as s,r,o as l,c,a as n,p as i,b as u,d as e,t as f}from"./index-995b63a6.js";const b={data(){return{code:`import moment from "moment";
import { formatDateTimeParams } from "rtlink-core";

const formObj = { name: "name1", value: "value1", time: new Date() };
const formObj2 = { name: "name2", value: "value2", time: moment() };

const newObj1 = formatDateTimeParams(formObj, ['time']);
const newObj2 = formatDateTimeParams(formObj, ['time'], 'YYYY-MM-DD');
const newObj3 = formatDateTimeParams(formObj, ['time'], 'YYYY-MM-DD hh:mm:ss');
const newObj4 = formatDateTimeParams(formObj, ['time'], 'YYYY-MM-DD 00:00:00');

const newObj5 = formatDateTimeParams(formObj2, ['time']);
const newObj6 = formatDateTimeParams(formObj2, ['time'], 'YYYY-MM-DD');
const newObj7 = formatDateTimeParams(formObj2, ['time'], 'YYYY-MM-DD hh:mm:ss');
const newObj8 = formatDateTimeParams(formObj2, ['time'], 'YYYY-MM-DD 00:00:00');

console.log(newObj1);
console.log(newObj2);
console.log(newObj3);
console.log(newObj4);

console.log(newObj5);
console.log(newObj6);
console.log(newObj7);
console.log(newObj8);

console.log(formObj);
console.log(formObj2);`,result:`{name: 'name1', value: 'value1', time: '2023-02-23'}
{name: 'name1', value: 'value1', time: '2023-02-23'}
{name: 'name1', value: 'value1', time: '2023-02-23 03:36:11'}
{name: 'name1', value: 'value1', time: '2023-02-23 00:00:00'}

{name: 'name2', value: 'value2', time: '2023-02-23'}
{name: 'name2', value: 'value2', time: '2023-02-23'}
{name: 'name2', value: 'value2', time: '2023-02-23 03:36:11'}
{name: 'name2', value: 'value2', time: '2023-02-23 00:00:00'}

{name: 'name1', value: 'value1', time: Thu Feb 23 2023 15:36:11 GMT+0800 (中国标准时间)}
{name: 'name2', value: 'value2', time: Moment}`}}},a=o=>(i("data-v-f3affcbe"),o=o(),u(),o),j={class:"page-content-container"},_=a(()=>e("h2",null,f("Object"),-1)),v=a(()=>e("h2",null,"formatDateTimeParams(obj, strArr, formatter) 格式化对象中值为时间类型的数据",-1)),O=a(()=>e("h4",null,"obj = Object, strArr = Array, formatter = String",-1)),d=a(()=>e("p",null,"返回一个深克隆的新对象。obj 是输入对象，strArr 要操作的字段，formatter 是格式模板，对接于 momentjs。常用于整理表单数据格式。",-1)),p=a(()=>e("p",null," ************** 运行结果 ************** ",-1));function D(o,Y,h,g,t,w){const m=r("highlightjs");return l(),c("div",j,[_,v,O,d,n(m,{language:"js",code:t.code},null,8,["code"]),p,n(m,{language:"js",code:t.result},null,8,["code"])])}const T=s(b,[["render",D],["__scopeId","data-v-f3affcbe"]]);export{T as default};
