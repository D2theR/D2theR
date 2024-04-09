import { defineStore } from 'pinia';
import defaultSettings from "~/data/defaultsettings.json"

export const useAppSettings = defineStore('appSettings', () => {
  const settings = ref(defaultSettings)

  function getThemeUserStorage() {
    if (process.client) { // Check if we're on the client
      const storedTheme = localStorage.getItem('theme');
      
      if (storedTheme) {
        // settings.value.theme = storedTheme;
        console.log(storedTheme) 
        // Assume 'theme' is a property in your settings
      }
    }
  }

  return {
    settings
  }
})