<template>
  <div class="p-6 rounded-lg shadow bg-white dark:bg-gray-800">
    <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-4">{{ as.settings.sections[0].name }}</h2>
    <p class="text-gray-600 dark:text-gray-300">
      {{ as.settings.sections[0].articleText }}
    </p>
  </div>
</template>

<script setup>
  import { useAppSettings } from '~/stores/appSettings'

  const as = useAppSettings()
</script>