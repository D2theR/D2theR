/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'dark-fern': {
          '50': '#efffee',
          '100': '#d6ffd6',
          '200': '#b0ffb0',
          '300': '#72ff72',
          '400': '#2ffa2e',
          '500': '#03e404',
          '600': '#03be00',
          '700': '#019402',
          '800': '#077408',
          '900': '#064708',
          '950': '#003601',
      },
      
      }
    },
  },
  plugins: [],
}

