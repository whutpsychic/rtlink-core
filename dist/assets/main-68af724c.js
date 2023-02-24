import{_ as a,r as l,o as _,c as d,a as c,p as i,b as p,d as o,t as r}from"./index-f474f120.js";const h={data(){return{code:`finalDo(() => {
  console.log(4)
})

console.log(1);
console.log(2);
console.log(3);`,result:`1
2
3
4`}}},e=s=>(i("data-v-4aa254fd"),s=s(),p(),s),u={class:"page-content-container"},g=e(()=>o("h2",null,r("void"),-1)),f=e(()=>o("h2",null,"finalDo(fn) 最后执行",-1)),m=e(()=>o("h4",null,"fn = Function ",-1)),v=e(()=>o("p",null,"在 js 线程中，最后执行 fn 函数。不返回任何结果。",-1)),j=e(()=>o("p",{class:"warning"},"【注意】本函数优先级不高于异步操作函数（如 Promise().then() 和 async/await等），仅能在同线程中运行的函数里生效。",-1)),x=e(()=>o("p",null," ************** 运行结果 ************** ",-1));function y(s,I,S,w,n,B){const t=l("highlightjs");return _(),d("div",u,[g,f,m,v,j,c(t,{language:"js",code:n.code},null,8,["code"]),x,c(t,{language:"js",code:n.result},null,8,["code"])])}const k=a(h,[["render",y],["__scopeId","data-v-4aa254fd"]]);export{k as default};
