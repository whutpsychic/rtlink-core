<template>
  <div class="main-content">
    <div class="left-menu">
      <el-menu>
        <el-menu-item-group class="menu-group">
          <template #title>
            <p class="menu-group-title">纯函数</p>
          </template>
          <el-menu-item index="1-1" class="menu-item-nav">item one</el-menu-item>
          <el-menu-item index="1-2" class="menu-item-nav">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template #title>
            <p class="menu-group-title">Prototype</p>
          </template>
          <el-menu-item index="2-1" class="menu-item-nav">item three</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template #title>
            <p class="menu-group-title">其他</p>
          </template>
          <el-menu-item index="3-1" class="menu-item-nav">item three</el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </div>
    <div class="right-content"></div>
  </div>
</template>

<script >

export default {
  mounted() { },
}

</script>

<style lang="scss" scoped>
.main-content {
  width: 1280px;
  margin: 0 calc(50vw - 640px);

  .left-menu {
    width: 25%;
    flex-basis: 25%;
    background-color: olivedrab;
  }

  .right-content {
    width: 75%;
    flex-basis: 75%;
    background-color: orange;
  }
}

.menu-group-title {
  font-size: 20px;
  font-weight: bold;
  color: #666;
}

.menu-item-nav{
  margin-left: 2em;
}
</style>