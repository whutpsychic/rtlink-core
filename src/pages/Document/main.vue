<template>
  <div class="page-can">
    <div class="left-menu">
      <LeftMenu />
    </div>
    <div class="right-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import LeftMenu from "./LeftMenu.vue"
import { RouterView } from 'vue-router'

export default {
  components: { LeftMenu },

}

</script>

<style scoped>
.page-can {
  display: flex;
  justify-content: space-between;
}

.left-menu {
  width: 25%;
  flex-basis: 25%;
  /* background-color: olivedrab; */
}

.right-content {
  width: 75%;
  flex-basis: 75%;
  /* background-color: orange; */
}
</style>