<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import AboutMe from './components/AboutMe.vue';
import Skills from './components/Skills.vue';
import { useAppSettings } from '~/stores/appSettings'; 

export default {
  components: { ToolBar, AboutMe, Skills },
  setup() {
    const appStore = useAppSettings();

    return { appStore };
  },
  methods: {
    setTheme() {
      if (this.themeStore.isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
  },
};
</script>
