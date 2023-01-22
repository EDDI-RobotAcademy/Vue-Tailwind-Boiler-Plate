<script lang="ts" setup>
defineProps<{
  message: string
}>()
</script>

<template>
  <div class="font-bold text-red-500 text-4xl">
    {{ message }}
  </div>
</template>
