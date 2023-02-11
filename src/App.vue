<template>
  <div class="page-outer-container">
    <div class="page-content-container">
      <Topbar />
      <RouterView />
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
