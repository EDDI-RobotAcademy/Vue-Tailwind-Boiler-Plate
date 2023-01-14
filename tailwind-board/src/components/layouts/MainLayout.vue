<script setup lang="ts">
import MainHeader from '@/components/sections/MainHeader.vue'
import Footer from "@/components/sections/Footer.vue";
</script>

<template>
  <MainHeader/>
  <slot/>
  <Footer/>
</template>
