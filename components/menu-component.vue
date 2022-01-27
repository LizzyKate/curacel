<template>
  <div
    class="max-h-screen overflow-y-scroll py-8 px-5 flex flex-col items-start"
  >
    <div class="flex justify-between items-center w-full">
      <h1
        class="text-lg font-semibold"
        style="color: #001a41; font-family:'Poppins"
      >
        Menu
      </h1>
      <div
        class="w-8 h-8 rounded-full flex items-center justify-center"
        style="background: #82828226"
      >
        <i class="ri-close-line text-lg" style="color: #001a41"></i>
      </div>
    </div>
    <div class="mt-4 flex flex-col">
      <h1
        class="text-lg font-semibold"
        style="color: #001a41; font-family:'Poppins"
      >
        Peceland App
      </h1>
      <p
        class="text-sm font-semibold mt-2"
        style="color: #74859c; font-family:'Poppins"
      >
        Smart App for Madiun Modern <br />Smart City
      </p>
    </div>
    <div class="mt-4 flex flex-col w-full">
      <p class="text-xs uppercase" style="color: #74859c; font-family:'Poppins">
        Board Admins
      </p>
      <div class="flex items-center justify-between mt-2">
        <div class="flex space-x-2 items-center">
          <img
            src="https://source.unsplash.com/100x100/?portrait"
            alt=""
            class="w-8 h-8 rounded-full"
          />
          <div>
            <h2
              class="text-sm font-semibold"
              style="color: #001a41; font-family:'Poppins"
            >
              Leroy
            </h2>
          </div>
        </div>
        <div class="flex space-x-2 items-center">
          <div>
            <i class="ri-settings-3-line" style="color: #74859c"></i>
          </div>
          <div>
            <i class="ri-share-line" style="color: #74859c"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full mt-6" style="border-top: 1px solid #828282a1"></div>
    <div class="flex flex-col mt-6 __recent" style="padding-left: 10px">
      <h1
        class="text-lg font-semibold"
        style="color: #001a41; font-family:'Poppins"
      >
        Recent Activity
      </h1>
      <div class="mt-8 __height" style="border-left: 1px dashed #828282a1">
        <div
          class="flex items-center relative __group"
          v-for="(task, f) in activity"
          :key="f"
        >
          <div class="absolute top-0" style="left: -15px">
            <img :src="task.img" alt="" class="w-8 h-8 rounded-full" />
          </div>
          <div class="flex flex-col ml-8">
            <p class="text-sm" style="color: #74859c; font-family: 'Poppins'">
              <span class="font-semibold" style="color: #001a41">{{
                task.name
              }}</span>
              {{ task.deed }}
              <span class="text-blue-500">{{ task.task }}</span>
              {{ task.location }}
            </p>
            <p class="text-xs" style="color: #74859c; font-family: 'Poppins'">
              {{ task.date }}
            </p>

            <div
              v-if="task.file"
              class="flex space-x-2 mt-2 p-2 items-center rounded-2xl"
              style="border: 1px solid #82828226"
            >
              <button
                class="rounded-lg w-6 h-6 flex items-center justify-center"
                style="background: #6c5ce76e"
              >
                <i class="ri-download-fill" style="color: #6c5ce7"></i>
              </button>
              <div class="flex flex-col items-start">
                <p
                  class="text-xs"
                  style="color: #6c5ce7; font-family: 'Poppins'"
                >
                  Compresearch.pd
                </p>
                <p
                  class="text-xs"
                  style="font-family: 'Poppins'; color: #828282"
                >
                  2.4mb
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
  data() {
    return {
      activity: [
        {
          img: "https://source.unsplash.com/100x100/?portrait",
          name: "Allison",
          deed: "added",
          task: "Usability Testing",
          location: "to To Do",
          date: "Aug 10 at 8:01 AM",
          file: false,
        },
        {
          img: "https://source.unsplash.com/100x100/?portrait",
          name: "Allison",
          deed: "added",
          task: "Usability Testing",
          location: "to To Do",
          date: "Aug 10 at 8:01 AM",
          file: false,
        },
        {
          img: "https://source.unsplash.com/100x100/?portrait",
          name: "Allison",
          deed: "added",
          task: "Usability Testing",
          location: "to To Do",
          date: "Aug 10 at 8:01 AM",
          file: true,
        },
        {
          img: "https://source.unsplash.com/100x100/?portrait",
          name: "Allison",
          deed: "added",
          task: "Usability Testing",
          location: "to To Do",
          date: "Aug 10 at 8:01 AM",
          file: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
.__height {
  height: calc(100vh - 22rem);

  position: relative !important;
}
::-webkit-scrollbar {
  display: none;
}
.__group:not(:first-child) {
  margin-top: 2rem;
}
</style>