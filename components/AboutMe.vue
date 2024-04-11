<template>
  <div class="container relative mt-3 mx-auto z-20"> <div class="grid grid-cols-12">
    <div class="col-span-4 p-2 "></div>
    <div class="col-span-4 p-2 rounded-lg bg-green-700 opacity-80">
      <div class="h-48 w-48 rounded-full overflow-hidden">  
        <img class="object-cover h-full w-full" src="~/public/greyling_crop.jpg"> 
      </div>
      <h2 class="text-xl font-bold dark:text-white mb-4">{{ as.settings.sections[0].name }}</h2>
        <p>
          {{ as.settings.sections[0].articleText }}
        </p>
    </div>
    <div class="col-span-4 p-2 "></div>
  </div>
</div>
</template>

<script setup>
import { useAppSettings } from '~/stores/appSettings'

const as = useAppSettings()
</script>

<style scoped>

</style>