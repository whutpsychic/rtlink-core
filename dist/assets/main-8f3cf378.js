import{_ as a,r as c,o as l,c as _,a as r,p as d,b as m,d as e,t as i}from"./index-1fc7690c.js";const p={data(){return{code:`import moment from "moment"
import { genDatesArr } from "rtlink-core"

const arr1 = genDatesArr();
const arr2 = genDatesArr(moment('2023-01-01'), 12);
const arr3 = genDatesArr(moment('2023-02-07'), 10);

console.log(arr1)
console.log(arr2)
console.log(arr3)`,result:`['2023-02-17', '2023-02-18', '2023-02-19', '2023-02-20', '2023-02-21', '2023-02-22', '2023-02-23']
['2022-12-21', '2022-12-22', '2022-12-23', '2022-12-24', '2022-12-25', '2022-12-26', '2022-12-27', '2022-12-28', '2022-12-29', '2022-12-30', '2022-12-31', '2023-01-01']
['2023-01-29', '2023-01-30', '2023-01-31', '2023-02-01', '2023-02-02', '2023-02-03', '2023-02-04', '2023-02-05', '2023-02-06', '2023-02-07']`}}},o=t=>(d("data-v-a34f8165"),t=t(),m(),t),u={class:"page-content-container"},g=o(()=>e("h2",null,i("Array<String>"),-1)),h=o(()=>e("h2",null,"genDatesArr(date, num) 生成日期数组",-1)),f=o(()=>e("h4",null,"date = moment(), num = 7",-1)),v=o(()=>e("p",null,"默认生成一个从今天起向前推7天的日期字符串数组。date 是一个 moment 类型的数据，num 表示向前推算多少天。",-1)),A=o(()=>e("p",null," ************** 运行结果 ************** ",-1));function D(t,S,j,x,n,y){const s=c("highlightjs");return l(),_("div",u,[g,h,f,v,r(s,{language:"js",code:n.code},null,8,["code"]),A,r(s,{language:"js",code:n.result},null,8,["code"])])}const k=a(p,[["render",D],["__scopeId","data-v-a34f8165"]]);export{k as default};
