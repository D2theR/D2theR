<template>
  <div class="container relative mt-3 mx-auto z-20">
    <div class="grid grid-cols-12">
      <div class="col-span-4"></div>
      <UCarousel arrows dots ref="carouselRef" v-slot="{ item }" :items="sections"
        :ui="{ 
        item: 'basis-full',
        controls: 'absolute -top-8 inset-x-12',
        dots: '-top-7',
        dot: 'w-6 h-1'
        }"
        class="w-auto h-auto col-span-4 rounded-lg overflow-hidden">
        <div class="p-2 w-full text-center rounded-lg opacity-80">
          <h2 class="text-xl font-bold dark:text-white mb-4">{{ item.name }}</h2>
          <img :src="item.image" width="300" height="300" class="rounded-full mx-auto" draggable="true">
          <p>{{ item.text }}</p>
        </div>

      </UCarousel>
      <div class="col-span-4"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppSettings } from '~/stores/appSettings'

const as = useAppSettings()
const sections = as.settings.sections

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 5000)
})


</script>

<style scoped></style>