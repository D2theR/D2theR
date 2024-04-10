<template>
  <ToolBar />
  <AboutMe />
  <Careers />
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import AboutMe from './components/AboutMe.vue';
import Careers from './components/Careers.vue';
import { useAppSettings } from '~/stores/appSettings'; 

export default {
  components: { ToolBar, AboutMe, Careers },
  setup() {
    const appStore = useAppSettings();

    // appStore.initializeTheme();  // Load from localStorage on startup

    // ... your existing theme logic

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
