<script setup lang="ts">
interface Props {
  text: string
}

const props = defineProps<Props>()
</script>

<template>
  <button
      :class="`flex items-center w-full h-full justify-center bg-gray-100 border-0 focus:outline-none
      hover:bg-gray-200 rounded text-base mt-4 md:mt-0`">
    {{ text }}
  </button>
</template>

<style scoped>

</style>