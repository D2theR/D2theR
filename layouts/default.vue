<script setup>

</script>

<template>
    <div class="bg-gradient z-0">
        <div class="starfield z-10"></div>
        <NuxtPage />
    </div>
    
   </template>

<style scoped>
.bg-gradient {
    background: linear-gradient(217deg, rgba(50, 50, 50, 0.8), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgba(0, 0, 0, 0.8), rgba(66, 0, 97, 0) 70.71%),
            linear-gradient(336deg, rgba(70, 0, 110, 0.8), rgba(0,0,255,0) 70.71%);
    min-height: 100vh;
}
</style>