<template>
  <header>
    <div class="left-title">
      <p># Rtlink-core</p>
    </div>
    <div class="right-content">
      <el-menu :default-active="state.activeIndex" class="top-bar-menu" mode="horizontal" :ellipsis="false"
        @select="handleSelect">
        <el-menu-item index="guide">指南</el-menu-item>
        <el-menu-item index="document">文档</el-menu-item>
      </el-menu>
      <span>v{{ version }}</span>
      <el-switch v-model="state.style" :active-icon="Moon" :inactive-icon="Sunny" @change="onChangeStyle" />
    </div>
  </header>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import pj from '~/package.json'
import { Sunny, Moon } from '@element-plus/icons-vue'
import { useStyle } from '@/stores/style.js'

const version = ref(pj.version)
const router = useRouter()
const webstyle = useStyle()

const state = reactive({
  // 
  activeIndex: 'document',
  // true = 黑夜模式, false = 默认
  style: webstyle.booleanType,
})

const handleSelect = (menu) => {
  router.push(`/${menu}`)
}

const onChangeStyle = (v) => {
  webstyle.change(v)
}

// 修正顶部默认显示的标签
onMounted(() => {
  const hashRoute = window.location.hash

  if (hashRoute.indexOf('#/guide') > -1) {
    state.activeIndex = 'guide'
  }
  else if (hashRoute.indexOf('#/document') > -1) {
    state.activeIndex = 'document'
  }
})

</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  padding: 0 20px;
  border-bottom: solid 1px #eee;
  user-select: none;
}

header p {
  font-weight: bold;
  color: #666;
}

header span {
  margin: 0 1em;
}

.right-content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}


html.dark header p {
  color: #fff;
}

html.dark header {
  border-bottom: solid 1px #666;
}
</style>