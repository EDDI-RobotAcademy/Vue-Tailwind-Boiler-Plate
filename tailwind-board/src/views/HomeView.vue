<template>
  <div class="about">
    <component :is="layout">
      <h1 class="">This is an home page</h1>
    </component>
  </div>
</template>

<script>
export default {
  computed: {
    layout() {
      return this.$route.meta.layout
    }
  }
}
</script>
