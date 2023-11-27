<template>
  <TopBar />
  <RouterView />
</template>

<script setup>
import TopBar from '@/components/TopBar/main.vue'
import { RouterView } from 'vue-router'
</script>
