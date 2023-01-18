<template>
  <header class="text-gray-600 body-font border-solid border-b-[1px] border-gray-200">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex font-medium items-center text-gray-900 mb-4 md:mb-0">
        <h1 class="text-2xl">Tailwind Board</h1>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a class="mr-5 hover:text-gray-900">First Link</a>
        <a class="mr-5 hover:text-gray-900">Second Link</a>
        <a class="mr-5 hover:text-gray-900">Third Link</a>
        <a class="mr-5 hover:text-gray-900">Fourth Link</a>
        <span>
          <MainButton text="button" />
        </span>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
<script>
import MainButton from '@/components/UI/buttons/MainButton.vue';

export default {
  components: { MainButton },
};
</script>
