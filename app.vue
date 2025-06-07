<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import ToolBar from './components/ToolBar.vue'
import AboutMe from './components/AboutMe.vue'
import Skills from './components/Skills.vue'
import { useAppSettings } from '~/stores/appSettings'

const appStore = useAppSettings()
</script>
