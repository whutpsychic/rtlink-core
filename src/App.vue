<template>
  <div class="page-outer-container">
    <div class="main-page-content-container">
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
}
</script>
