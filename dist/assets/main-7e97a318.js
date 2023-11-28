import{r as _,o as p,c as f,a as r,b as m,t as R}from"./index-0f28a4ff.js";function i(e=1,t=7,s=1){let n=[];for(let o=0;o<t;o++)n.push(e+o*s);return n}function C(e=0,t=100,s=1,n=0){const o=[];for(let c=0;c<s;c++)n?o.push(parseFloat((Math.random()*(t-e)+e).toFixed(n))):o.push(parseInt(Math.random()*(t-e)+e));return o.length===1?o[0]:o}function h(e,t=7){const s=i(65,26),n=i(97,26),o=i(48,10);let c=[];e==="CHAR"?c=s:e==="char"?c=n:e==="number"?c=o:c=[...o,...s,...n];let a="";const u=c.length;for(let g=0;g<t;g++){let d=C(0,u);a+=String.fromCharCode(c[d])}return a}function l(e,t=7,s=1){if(s>1){let n=[];for(let o=0;o<s;o++)n.push(h(e,t));return n}else return h(e,t)}const b={class:"page-container"},k={class:"main-content"},L=r("h2",null,R("String | Array<String>"),-1),v=r("h3",null,"genRandomCode(type: String?, length: Number?, num: Number?) 生成随机编码",-1),x=r("h4",null,'Default: type = undefined | "number" | "CHAR" | "char", length = 1',-1),A=r("p",null,"默认生成一个随机编码；当 num > 1 时生成的结果是一个随机数组。length 是生成的编码长度，type 表示编码类型。为 number 时是纯数字，为 CHAR 时是纯大写英文字符，为 char 时是纯小写英文字符，未定义时是全混合式的随机编码。",-1),j=r("p",{class:"result-spliter"},"********************* 运行结果 *********************",-1),w=`import { genRandomCode } from "rtlink-core";

const code1 = genRandomCode();
const code2 = genRandomCode(null, 8);
const code3 = genRandomCode(null, 8, 6);
const code4 = genRandomCode("number", 8);
const code5 = genRandomCode("CHAR", 8);
const code6 = genRandomCode("char", 18, 5);

console.log(code1);
console.log(code22);
console.log(code3);
console.log(code4);
console.log(code5);
console.log(code6);
`,y=`
// 动态结果
n9FuWPO
VofJPL7b
[
  "DGR0gk9V",
  "Y1YEqEKD",
  "NjLgLABj",
  "IEl4sUeb",
  "1h0htFRD",
  "w8Za0Z1x"
]
93362702
PMLLGATR
[
  "ksokfbdkapjmuxpmeh",
  "mvrqqshminoavuksbi",
  "iwofrbkkxtrsthwzep",
  "fmoyxyucgjnlmrlxqw",
  "epbautwgdzgpyjncpg"
]`,S={__name:"main",setup(e){const t=l(),s=l(null,8),n=l(null,8,6),o=l("number",8),c=l("CHAR",8),a=l("char",18,5);return console.log(t),console.log(s),console.log(n),console.log(o),console.log(c),console.log(a),(u,g)=>{const d=_("highlightjs");return p(),f("div",b,[r("div",k,[L,v,x,A,m(d,{language:"Javascript",code:w}),j,m(d,{language:"Javascript",code:y})])])}}};export{S as default};
