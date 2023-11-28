<template>
  <main>
    <div class="left-menu-can">
      <el-menu :default-active="defaultActiveName" @select="onSelectMenu" unique-opened>
        <el-sub-menu index="fn">
          <template #title>
            <p class="menu-sub-title">纯函数</p>
          </template>
          <el-menu-item v-for="(item) in fn" :key="item.name" class="el-item-bar" :index="item.name">
            <div class="des-block">
              <p class="fnname">{{ item.name }}</p>
              <p class="fndes">{{ item.title }}</p>
            </div>
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="global">
          <template #title>
            <p class="menu-sub-title">全局方法</p>
          </template>
          <el-menu-item v-for="(item) in global" :key="item.name" class="el-item-bar" :index="item.name">
            <div class="des-block">
              <p class="fnname">{{ item.name }}</p>
              <p class="fndes">{{ item.title }}</p>
            </div>
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="prototype">
          <template #title>
            <p class="menu-sub-title">Prototype</p>
          </template>
          <el-sub-menu index="Array">
            <template #title>
              <p class="menu-sub-title sub">Array</p>
            </template>
            <el-menu-item v-for="(item) in prototype_array" :key="item.name" class="el-item-bar" :index="item.name">
              <div class="des-block">
                <p class="fnname">{{ item.name }}</p>
                <p class="fndes">{{ item.title }}</p>
              </div>
            </el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
    </div>
    <div class="right-content-can">
      <RouterView />
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { RouterView, useRouter, useRoute } from 'vue-router'
import { fn, global, prototype_array } from '@/db.js'

const router = useRouter()
const route = useRoute()

const defaultActiveName = ref(fn[0].name)

const onSelectMenu = (menu, paths) => {
  router.push(`/document/${paths.join('/')}`)
}

onMounted(() => {
  const pathArr = route.path.split('/')
  const L = pathArr.length
  const targetName = pathArr[L - 1]
  defaultActiveName.value = targetName
})


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

.menu-sub-title {
  font-size: 16px;
  font-weight: bold;
  color: #233;
}

.menu-sub-title.sub {
  font-size: 14px;
}

.fnname,
.fndes {
  font-size: 14px;
  height: 14px;
  line-height: 14px;
}

.fnname {
  margin-bottom: 0.5em;
}

.el-item-bar {
  height: calc(5em);
  padding: 1em 0;
}
</style>