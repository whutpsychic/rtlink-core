import{r as n,o as l,c,a as e,b as o,h as a}from"./index-0f28a4ff.js";const i={class:"page-container"},_={class:"main-content"},r=e("h2",null,"void",-1),d=e("h3",null,"finalDo(fn: Function) 最后执行",-1),h=e("p",null,"在 js 线程中，最后执行 fn 函数。不返回任何结果。",-1),p=e("div",{class:"spliter"},null,-1),g=e("div",{class:"spliter"},null,-1),u=e("p",{class:"result-spliter"},"********************* 运行结果 *********************",-1),m=`finalDo(()=>{
  console.log(4)
})
console.log(1)
console.log(2)
console.log(3)`,v=`1
2
3
4`,B={__name:"main",setup(f){return(y,j)=>{const t=a,s=n("highlightjs");return l(),c("div",i,[e("div",_,[r,d,h,p,o(t,{title:"【注意】本函数优先级不高于异步操作函数（如 Promise().then() 和 async/await等），仅能在同线程中运行的函数里生效。",type:"warning",closable:!1}),g,o(s,{language:"Javascript",code:m}),u,o(s,{language:"Javascript",code:v})])])}}};export{B as default};
