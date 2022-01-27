<template>
  <div
    class="flex justify-between items-center bg-white px-4 py-2.5 rounded-2xl"
  >
    <p
      class="text-sm font-semibold __heading"
      style="color: #001a41; font-family:'Poppins"
    >
      {{ heading }}
    </p>
    <div class="flex justify-end space-x-2 items-center">
      <div>
        <i class="ri-more-line"></i>
      </div>

      <div
        class="w-6 h-6 p-2 rounded-lg flex items-center justify-center ml-2"
        style="background: #6c5ce76e"
      >
        <i class="ri-add-line text-base" style="color: #6c5ce7"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "board-title",
  props: ["heading"],
};
</script>

<style>
</style>