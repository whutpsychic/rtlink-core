<template>
  <div :class="nightMode ? 'page-outer-container nightMode' : 'page-outer-container'">
    <div class="page-content-container">
      <Topbar />
      <div class="main-content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import Topbar from "@/components/Topbar.vue"
import { RouterView } from 'vue-router'

export default {
  components: { Topbar },
  computed: {
    nightMode() {
      return this.$store.state.nightMode
    }
  }
}
</script>
