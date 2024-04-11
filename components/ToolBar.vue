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
  <div class="inline-block w-72 h-12 ml-auto flex justify-end items-center rounded-3xl shadow-sm shadow-green-400 hover:shadow-yellow-500 px-4 z-50">
    <UToggle 
       size="2xl"  
       off-icon="i-heroicons-moon" 
       on-icon="i-heroicons-sun" 
       v-model="selected"
       @click="isDark = !isDark"
    />
  </div>
</template>
