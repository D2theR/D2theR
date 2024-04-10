<script setup lang="ts">
import { useAppSettings } from "~/stores/appSettings"
const selected = ref(false)
const colorMode = useColorMode()

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-12 bg-gray-200 dark:bg-gray-800 flex justify-end items-center px-4 z-50"> 
    <UToggle 
       size="2xl"  
       off-icon="i-heroicons-sun" 
       on-icon="i-heroicons-moon" 
       v-model="selected"
       @click="isDark = !isDark"
    />
  </div>
</template>
