<template>
  <div class="page-content-container">
    <h2>genRandomCode(type, length) 生成随机编码</h2>
    <h4> length = 7, type = "number" | "CHAR" | "char" | "random"</h4>
    <p>默认生成一个 7 位的纯数字字符串编码。length 时生成的编码长度，type 表示编码类型。为 number 时是纯数字，为 CHAR 时是纯大写英文字符，为 char 时是纯小写英文字符，为 random 时是全混合式的随机编码</p>
    <highlightjs language="js" :code="code" />
    <!-- <highlightjs language="js" :code="result" /> -->
  </div>
</template>
<script >

export default {
  data() {
    return {
      code:
        `import { genRandomCode } from 'rtlink-core';        

const code1 = genRandomCode("CHAR", 10);
const code2 = genRandomCode("char", 8);

console.log(code1);
console.log(code2);`,
      result:
        `// 运行结果
`
    }
  }
}

</script>

<style scoped>
p {
  font-size: 15px;
}
</style>