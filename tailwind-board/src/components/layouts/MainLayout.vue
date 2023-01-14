<script setup>
import MainHeader from '../sections/MainHeader.vue'
import Footer from "@/components/sections/Footer.vue";
</script>

<template>
  <MainHeader/>
  <slot/>
  <Footer/>
</template>

<script>
export default {}
</script>