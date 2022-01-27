<template>
  <div>
    <div class="relative ffff" v-if="list.img">
      <img
        :src="list.img"
        class="__task_image"
        style="border-top-left-radius: 16px; border-top-right-radius: 16px"
      />
      <div
        class="text-xs absolute bottom-3 right-3 rounded w-8 h-8 p-2"
        style="background: #74859c; color: white"
      >
        1/4
      </div>
    </div>
    <div class="p-3 flex flex-col">
      <div
        class="rounded-md"
        style="width: fit-content"
        :style="{ background: getStyle(list.tag) }"
      >
        <p
          class="text-xs font-semibold tags rounded py-1 px-2 poppins"
          :style="getColor(list.tag)"
        >
          {{ list.tag }}
        </p>
      </div>
      <div class="mt-2 text-sm font-semibold poppins" style="color: #001a41">
        {{ list.title }}
      </div>
      <div class="mt-2 text-xs poppins __description" style="color: #74859c">
        {{ list.description }}
      </div>
      <div
        class="
          mt-3
          rounded-md
          py-1
          px-2
          text-xs
          font-semibold
          poppins
          __date_holder
        "
      >
        Aug 20, 2021
      </div>
      <div class="flex items-center justify-between mt-4">
        <div class="relative">
          <div class="w-5 h-5" style="z-index: 1000">
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt=""
              class="rounded-full"
            />
          </div>
          <div
            class="absolute top-0 w-5 h-5"
            style="left: 16px; z-index: 500px"
          >
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt=""
              class="rounded-full"
            />
          </div>
          <div
            class="absolute top-0 w-5 h-5"
            style="left: 33px; z-index: -50px"
          >
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt=""
              class="rounded-full"
            />
          </div>
          <div
            class="absolute top-0 w-5 h-5"
            style="left: 50px; z-index: -100px"
          >
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt=""
              class="rounded-full"
            />
          </div>
        </div>
        <div class="flex space-x-2 items-center">
          <div class="flex space-x-1 items-center" v-if="list.tick">
            <div
              class="w-4 h-4 p-1 rounded-full flex items-center justify-center"
              style="border: 1px solid #828282"
            >
              <i class="ri-check-line text-xs" style="color: #828282"></i>
            </div>
            <p style="color: #828282; font-size: 8px" class="poppins">0/8</p>
          </div>
          <div class="flex space-x-1 items-center" v-if="list.bookmark">
            <div>
              <i class="ri-bookmark-line text-xs" style="color: #828282"></i>
            </div>
            <p style="color: #828282; font-size: 8px">4</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "board-title",
  props: ["list"],
  methods: {
    getStyle(tag) {
      switch (tag) {
        case "High":
          return "#ff000026";
        case "Low":
          return "rgba(50, 186, 133, 0.15)";
        case "Due Today":
          return "rgba(242, 153, 74, 0.15)";
        default:
          return "rgba(50, 186, 133, 0.15)";
      }
    },
    getColor(tag) {
      switch (tag) {
        case "High":
          return "#ff0000a3";
        case "Low":
          return "#32BA85";
        case "Due Today":
          return "#F2994A";
        default:
          return "#32BA85";
      }
    },
  },
  mounted() {
    console.log(this.list);
  },
};
</script>

<style>
.poppins {
  font-family: "Poppins";
}

.__date_holder {
  border: 0.5px solid #82828226;
  background: #82828226;
  width: fit-content;
  color: #001a41;
}
</style>
