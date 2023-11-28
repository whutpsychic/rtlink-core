<template>
  <div class="page-container">
    <div class="main-content">
      <h2>Promise</h2>
      <h3>copyToClipboard(str: String) 复制文字到剪贴板</h3>
      <p>返回一个Promise对象。您可以根据监听状态决定复制完后和复制失败后的动作。</p>
      <highlightjs language="Javascript" :code="code" />
      <div class="spliter" />
      <h4>试一试</h4>
      <div class="spliter" />
      <el-input v-model="textarea" :rows="2" type="textarea" placeholder="Please input" />
      <div class="spliter" />
      <el-button type="primary" @click="copy">copy!</el-button>
      <div class="spliter" />
      <el-input v-model="textarea2" :rows="2" type="textarea" placeholder="Please input" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { copyToClipboard } from '$'
import { ElMessage } from 'element-plus'

const textarea = ref('')
const textarea2 = ref('')

const copy = () => {
  const text = textarea.value;

  copyToClipboard(text).then(() => {
    ElMessage({
      message: '已成功复制到剪贴板！',
      type: 'success',
    })
    textarea2.value = text
  }).catch(err => {
    console.error(err)
  })
}

const code = `import { ref } from 'vue'
import { copyToClipboard } from 'erlink-core'
import { ElMessage } from 'element-plus'

const textarea = ref('')
const textarea2 = ref('')

const copy = () => {
  const text = textarea.value;

  copyToClipboard(text).then(() => {
    ElMessage({
      message: '已成功复制到剪贴板！',
      type: 'success',
    })
  }).catch(err => {
    console.error(err)
  })
}`

</script>

<style>
h2,
h3 {
  margin-bottom: 1em;
}

p {
  font-size: 14px;
  margin-bottom: 0.5em;
}
</style>