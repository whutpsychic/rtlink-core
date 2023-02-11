<template>
  <div class="top-bar-container">
    <div class="logo-part">
      <p># Rtlink-core</p>
    </div>
    <div class="right-content">
      <el-menu :default-active="activeIndex" class="top-menu-can" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">指南</el-menu-item>
        <el-menu-item index="2">文档</el-menu-item>
      </el-menu>
      <span>{{ version }}</span>
      <el-icon>
        <Sunny />
      </el-icon>
      <el-switch v-model="nightMode" active-color="#000" inactive-color="#ddd" />
      <el-icon>
        <Moon />
      </el-icon>
      <el-select v-model="lang" class="lang-selector" @change="chooseLang">
        <el-option v-for="item in langs" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
  </div>
</template>

<script>
import globalData from "@/data/global.js"

export default {
  data() {
    return {
      // ---------- 静态数据 ----------
      version: `v${globalData.version}`,
      langs: [
        { label: "简体中文", value: "简体中文" },
        { label: "English", value: "English" }
      ],
      // ---------- 控制键 ----------
      nightMode: false,
    }
  },
  computed: {
    lang() {
      return this.$store.state.language
    }
  },
  methods: {
    // 切换语言
    chooseLang(v) {
      this.$store.commit("changeLanguage", v)
    },
  }
}
</script>

<style lang="scss" scoped>
.top-bar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #ddd;

  >div {
    margin: 0 3em;
  }

  p {
    font-weight: bold;
    color: #666;
  }

  .right-content {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-width: 50vw;

    >* {
      margin-left: 1em;
    }
  }

  .top-menu-can {
    border-bottom: none;
    min-width: 200px;
  }

  .lang-selector {
    width: 7em;
  }
}
</style>