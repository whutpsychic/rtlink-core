<template>
  <div class="page-container">
    <div class="main-content">
      <h2>{{ `String | Array<String>` }}</h2>
      <h3>genRandomCode(type: String?, length: Number?, num: Number?) 生成随机编码</h3>
      <h4>Default: type = undefined | "number" | "CHAR" | "char", length = 1</h4>
      <p>默认生成一个随机编码；当 num > 1 时生成的结果是一个随机数组。length 是生成的编码长度，type 表示编码类型。为 number 时是纯数字，为 CHAR 时是纯大写英文字符，为 char
        时是纯小写英文字符，未定义时是全混合式的随机编码。</p>
      <highlightjs language="Javascript" :code="code" />
      <p class="result-spliter">********************* 运行结果 *********************</p>
      <highlightjs language="Javascript" :code="code2" />
    </div>
  </div>
</template>

<script setup>
import { genRandomCode } from '$'
const code = `import { genRandomCode } from "rtlink-core";

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
`

const code2 = `
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
]`

const code1 = genRandomCode();
const code22 = genRandomCode(null, 8);
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

</script>

<style>
h2,
h3,
h4 {
  margin-bottom: 1em;
}

p {
  font-size: 14px;
  margin-bottom: 0.5em;
}
</style>