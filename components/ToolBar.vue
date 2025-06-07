<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get: () => colorMode.value === 'dark',
  set: (value: boolean) => {
    colorMode.preference = value ? 'dark' : 'light'
  }
})
</script>

<template>
  <div class="inline-block w-72 h-12 ml-auto flex justify-end items-center rounded-3xl shadow-sm shadow-green-400 hover:shadow-yellow-500 px-4 z-50">
    <UToggle
       size="2xl"
       off-icon="i-heroicons-moon"
       on-icon="i-heroicons-sun"
       v-model="isDark"
    />
  </div>
</template>
