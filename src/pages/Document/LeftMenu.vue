<template>
  <el-menu :default-active="defaulActiveNav || menuData.pureFn[0]['nav']" @select="onChangeMenu">
    <!-- 纯函数组 -->
    <el-menu-item-group class="menu-group">
      <template #title>
        <p class="menu-group-title">纯函数</p>
      </template>
      <el-menu-item v-for="(fn, i) in menuData.pureFn" :index="fn['nav']" class="menu-item-nav">
        {{ fn['name'] }}
        {{ fn['explain'] }}
      </el-menu-item>
    </el-menu-item-group>
    <!-- Prototype 组 -->
    <el-menu-item-group>
      <template #title>
        <p class="menu-group-title">Prototype</p>
      </template>
      <el-sub-menu v-for="(item, i) in menuData.rtc" :index="`${item['group']}`" class="sub-menu-item">
        <template #title>
          <p class="submenu-title">{{ item['group'] }}</p>
        </template>
        <el-menu-item v-for="(fn, j) in item['children']"
          :index="`${fn['nav']}`" class="menu-item-nav">
          {{ fn['name'] }}
          {{ fn['explain'] }}
        </el-menu-item>
      </el-sub-menu>
    </el-menu-item-group>
    <!-- element-ui 组 -->
    <el-menu-item-group class="menu-group">
      <template #title>
        <p class="menu-group-title with-subtitle">Element-UI 数据处理</p>
      </template>
      <el-menu-item v-for="(fn, i) in menuData.elPureFn" :index="fn['nav']" class="menu-item-nav with-subtitle">
        <p class="subtitle">
          <span>{{ fn['name'] }}</span>
          <span class="detail">{{ fn['explain'] }}</span>
        </p>
      </el-menu-item>
    </el-menu-item-group>
    <!-- rtlink-ui 组 -->
    <el-menu-item-group class="menu-group">
      <template #title>
        <p class="menu-group-title with-subtitle">Rtlink-UI 数据处理</p>
      </template>
      <el-menu-item v-for="(fn, i) in menuData.rtPureFn" :index="fn['nav']" class="menu-item-nav with-subtitle">
        <template #title>
          <p class="subtitle">
            <span>{{ fn['name'] }}</span>
            <span class="detail">{{ fn['explain'] }}</span>
          </p>
        </template>
      </el-menu-item>
    </el-menu-item-group>
</el-menu>
</template>

<script>
import menuData from "@/data/fn-menu.js"

export default {
  data() {
    return {
      menuData,
      defaulActiveNav: null
    }
  },
  mounted() {
    // 匹配刷新时的路由
    this.matchForRoute()
  },
  methods: {
    onChangeMenu(v) {
      this.$router.push({ path: `/document/${v}` })
    },
    matchForRoute() {
      const locationStr = window.location.href

      const dataArr = locationStr.split("/")
      const navStr = dataArr[dataArr.length - 1]

      this.defaulActiveNav = navStr
    },
  }
}
</script>

<style lang="scss" scoped>
.menu-group-title {
  font-size: 20px;
  font-weight: bold;
  color: #666;
  margin-top: 0;
  margin-bottom: 0;
}

.submenu-title {
  font-size: 15px;
  font-weight: bold;
  text-indent: 2em;
  color: #666;
  margin-top: 0;
  margin-bottom: 0;
}

.menu-item-nav {
  margin-left: 2em;
  height: 3em;
}

.with-subtitle {
  margin-bottom: 0.5em;
}

.subtitle {
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;

  >span {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
  }

  >span.detail {
    color: #aaa;
  }
}
</style>