import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStyle = defineStore('style', () => {
  const style = ref('light');
  const booleanType = computed(() => style.value === 'dark' ? true : false)

  function change(type) {
    style.value = type ? 'dark' : 'light';
    // 对<html />下手

    let target = document.getElementsByTagName('html')[0]

    if (booleanType.value) {
      target.className = 'dark';
    }
    else {
      target.className = '';
    }
  }

  return { style, booleanType, change }
})
