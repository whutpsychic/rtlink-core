import{r as t,o as c,c as s,a as o,b as n,t as a}from"./index-af87bf53.js";const d={class:"page-container"},l={class:"main-content"},r=o("h2",null,a("String | Array<String>"),-1),g=o("h3",null,"genRandomCode(type: String?, length: Number?, num: Number?) 生成随机编码",-1),i=o("h4",null,'Default: type = undefined | "number" | "CHAR" | "char", length = 1',-1),m=o("p",null,"默认生成一个随机编码；当 num > 1 时生成的结果是一个随机数组。length 是生成的编码长度，type 表示编码类型。为 number 时是纯数字，为 CHAR 时是纯大写英文字符，为 char 时是纯小写英文字符，未定义时是全混合式的随机编码。",-1),_=o("p",{class:"result-spliter"},"********************* 运行结果 *********************",-1),u=`import { genRandomCode } from "rtlink-core";

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
`,h=`
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
]`,f={__name:"main",setup(p){return(R,b)=>{const e=t("highlightjs");return c(),s("div",d,[o("div",l,[r,g,i,m,n(e,{language:"Javascript",code:u}),_,n(e,{language:"Javascript",code:h})])])}}};export{f as default};
