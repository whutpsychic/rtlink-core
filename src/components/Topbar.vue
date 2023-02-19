<template>
  <div class="top-bar-container">
    <div class="logo-part">
      <p># Rtlink-core</p>
    </div>
    <div class="right-content">
      <el-menu :default-active="'2'" class="top-menu-can" mode="horizontal" @select="handleSelect" :ellipsis="false">
        <el-menu-item index="1">指南</el-menu-item>
        <el-menu-item index="2">文档</el-menu-item>
      </el-menu>
      <span>{{ version }}</span>
      <el-icon>
        <sunny />
      </el-icon>
      <el-switch :value="nightMode" active-color="#000" inactive-color="#ddd" @change="toggleViewMode"
        :border-color="nightMode ? '#aaa' : '#eee'" />
      <el-icon>
        <moon />
      </el-icon>
      <el-select v-model="lang" class="lang-selector" @change="chooseLang" disabled>
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

    }
  },
  computed: {
    // 当前语言
    lang() {
      return this.$store.state.language
    },
    // ---------- 控制键 ----------
    nightMode() { return this.$store.state.nightMode }
  },
  methods: {
    // 切换语言
    chooseLang(v) {
      this.$store.commit("changeLanguage", v)
    },
    // 切换黑夜模式
    toggleViewMode(v) {
      this.$store.commit("toggleViewMode", v)
    },
    // 切换标签页
    handleSelect(v) {
      // 指南
      if (v === "1") {
        this.$router.replace("/guide")
      }
      // 文档
      else {
        this.$router.replace("/document")
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.top-bar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: 1px;

  >div {
    margin: 0 3em;
  }

  p {
    font-weight: bold;
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
  }

  .lang-selector {
    width: 7em;
  }
}
</style>