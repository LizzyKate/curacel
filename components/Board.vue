<template>
  <div
    class="flex space-x-4 items-start mt-10 overflow-x-scroll"
    style="max-width: 100%"
  >
    <div
      class="w-1/4 __height overflow-y-scroll"
      v-for="(task, i) in tasks"
      :key="i"
    >
      <div
        class="
          flex
          justify-between
          items-center
          bg-white
          px-4
          py-2.5
          rounded-2xl
        "
      >
        <p
          class="text-sm font-semibold"
          style="color: #001a41; font-family:'Poppins"
        >
          {{ task.heading }}
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

      <div class="mt-4 flex flex-col" style="">
        <draggable
          class="cursor-move"
          :list="task.list"
          @start="drag = true"
          :group="{ name: 'myGroup', pull: true, put: true }"
          @end="drag = false"
          :move="detectMove"
        >
          <div
            class="rounded-2xl mt-4 flex flex-col bg-white"
            ref="drag"
            v-for="(list, a) in task.list"
            :key="a"
          >
            <div class="relative" v-if="list.img !== ''">
              <img
                :src="list.img"
                style="
                  border-top-left-radius: 16px;
                  border-top-right-radius: 16px;
                "
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
                :style="[
                  list.tag === 'High'
                    ? { background: '#ff000026' }
                    : list.tag === 'Low'
                    ? { background: ' rgba(50, 186, 133, 0.15)' }
                    : list.tag === 'Due Today'
                    ? { background: 'rgba(242, 153, 74, 0.15)' }
                    : { background: ' rgba(50, 186, 133, 0.15)' },
                ]"
              >
                <p
                  class="text-xs font-semibold tags rounded py-1 px-2"
                  style=" font-family:'Poppins"
                  :style="[
                    list.tag === 'High'
                      ? { color: '#ff0000a3' }
                      : list.tag === 'Low'
                      ? { color: '#32BA85' }
                      : list.tag === 'Due Today'
                      ? { color: '#F2994A' }
                      : { color: '#32BA85' },
                  ]"
                >
                  {{ list.tag }}
                </p>
              </div>
              <div
                class="mt-2 text-sm font-semibold"
                style="color: #001a41; font-family:'Poppins"
              >
                {{ list.title }}
              </div>
              <div
                class="mt-2 text-xs"
                style="color: #74859c; font-family: 'Poppins'"
              >
                {{ list.description }}
              </div>
              <div
                class="mt-3 rounded-md py-1 px-2 text-xs font-semibold"
                style="
                  border: 0.5px solid #82828226;
                  background: #82828226;
                  width: fit-content;
                  color: #001a41;
                  font-family: 'Poppins';
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
                      class="
                        w-4
                        h-4
                        p-1
                        rounded-full
                        flex
                        items-center
                        justify-center
                      "
                      style="border: 1px solid #828282"
                    >
                      <i
                        class="ri-check-line text-xs"
                        style="color: #828282"
                      ></i>
                    </div>
                    <p
                      style="
                        color: #828282;
                        font-family: 'Poppins';
                        font-size: 8px;
                      "
                    >
                      0/8
                    </p>
                  </div>
                  <div class="flex space-x-1 items-center" v-if="list.bookmark">
                    <div>
                      <i
                        class="ri-bookmark-line text-xs"
                        style="color: #828282"
                      ></i>
                    </div>
                    <p
                      style="
                        color: #828282;
                        font-family: 'Poppins';
                        font-size: 8px;
                      "
                    >
                      4
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "Board",
  components: {
    draggable,
  },
  display: "Handle",
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    detectMove: function (evt) {
      console.log(evt.dragged.draggable);
      if (evt.dragged.draggable === true) {
        // this.$refs.drag.style.background = "red";
        console.log(this.$refs.drag);
      }
    },
  },
  async beforeMount() {
    const res = await this.$axios.$get("/tasks");
    this.tasks = res;
  },
};
</script>

<style scoped>
.__height {
  height: calc(100vh - 20rem);

  position: relative !important;
}
::-webkit-scrollbar {
  display: none;
}
</style>