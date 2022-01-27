<template>
  <div
    class="flex space-x-4 items-start __height overflow-scroll mt-10"
    style="max-width: 100%"
  >
    <div class="w-1/4" v-for="(task, i) in tasks" :key="i">
      <board-title :heading="task.heading" />

      <div class="mt-4 flex flex-col">
        <draggable
          class="cursor-move"
          id="board_rows"
          :list="task.list"
          @start="drag = true"
          :group="{ name: 'myGroup', pull: true, put: true }"
          @end="drag = false"
          ghost-class="ghost"
          :animation="100"
        >
          <div
            class="rounded-2xl mt-4 flex flex-col bg-white field __draggelement"
            ref="drag"
            v-for="(list, a) in task.list"
            :key="a"
          >
            <board-items :list="list" />
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import BoardItems from "./board-items.vue";
import BoardTitle from "./board-title.vue";
export default {
  name: "Board",
  components: {
    draggable,
    BoardTitle,
    BoardItems,
  },
  display: "Handle",
  data() {
    return {
      tasks: [],
      error: false,
    };
  },
  methods: {
    async getData() {
      try {
        const res = await this.$axios.$get("/tasks");
        this.tasks = res;
      } catch (error) {
        this.error = true;
      }
    },
  },
  async beforeMount() {
    await this.getData();
  },
};
</script>

<style scoped>
.__height {
  height: calc(100vh - 18rem);

  position: relative !important;
}
::-webkit-scrollbar {
  display: none;
}
.ghost {
  opacity: 0.2;
  background: purple;
  height: 170px;
}

.ghost * {
  visibility: hidden;
}

.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
#board_rows {
  min-height: 1000px;
}
</style>