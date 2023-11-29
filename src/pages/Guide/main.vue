<template>
  <main>
    <div class="left-menu-can">
      <el-menu :default-active="`install`">
        <el-menu-item-group class="item-group" title="快速开始">
          <el-menu-item class="el-item-bar" index="install">安装</el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </div>
    <div class="right-content-can">
      <div class="page-container">
        <div class="main-content">
          <h2>快速开始</h2>
          <p>本节将介绍如何在项目中使用 rtlink-core。</p>
          <h3>使用 npm 安装</h3>
          <highlightjs language="Javascript" :code="install" />
          <div class="spliter" />
          <!-- --------- -->
          <h3>使用纯函数</h3>
          <p>例如：生成一个长度为5的随机数组</p>
          <highlightjs language="Javascript" :code="code" />
          <div class="spliter" />
          <!-- --------- -->
          <h3>初始化 proptype 函数</h3>
          <p>在 main.js 中写入以下内容：</p>
          <highlightjs language="Javascript" :code="code2" />
          <div class="spliter" />
          <p>然后您就可以在其后的任意位置直接调用全局函数和 prototype 相关函数了。</p>
          <!-- --------- -->
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>

const install = `npm i rtlink-core -s`
const code = `import { genRandomNumber } from 'rtlink-core';

const arr = genRandomNumber(0, 100, 5);

console.log(arr)`
const code2 = `import { rtc } from 'rtlink-core';

rtc.init();`

</script>

<style scoped>
main {
  display: flex;
  justify-content: space-between;
}

.left-menu-can {
  width: 280px;
  flex-basis: 280px;
}

.right-content-can {
  width: calc(100vw - 280px);
  flex-basis: calc(100vw - 280px);
}

h2,
h3 {
  margin-bottom: 1em;
}

p {
  font-size: 14px;
  margin-bottom: 0.5em;
}
</style>