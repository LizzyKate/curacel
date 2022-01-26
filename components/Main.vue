<!-- Please remove this file from your project -->
<template>
  <div class="px-8 py-4 __main rounded-2xl w-full">
    <div class="flex justify-between items-center">
      <div class="w-1/2 relative">
        <input
          type="text"
          class="
            form-control
            block
            w-full
            pl-9
            py-3
            text-sm
            font-normal
            bg-transparent
            rounded-2xl
            transition
            ease-in-out
            m-0
          "
          style="
            border: 1px solid #74859c75;
            color: #9ca3af;
            font-family: 'Poppins';
          "
          placeholder="Search for anything"
        />
        <div class="absolute" style="top: 10px; left: 13px">
          <i class="ri-search-line text-xl" style="color: #9ca3af"></i>
        </div>
      </div>

      <div class="flex items-center space-x-4">
        <div>
          <button
            type="button"
            class="
              px-6
              py-3
              flex
              space-x-1
              items-center
              font-medium
              text-xs
              leading-tight
              rounded-2xl
              shadow-md
              hover:shadow-lg
              focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-blue-800 active:shadow-lg
              transition
              duration-150
              ease-in-out
            "
            style="
              background: #6c5ce7;
              color: #ffffffc2;
              font-family: 'Poppins';
            "
          >
            <span
              class="w-5 h-5 rounded-md flex items-center justify-center"
              style="background: #ffffff4a"
            >
              <i class="ri-add-line text-white text-base"></i>
            </span>
            <span>Create New Board</span>
          </button>
        </div>
        <button class="w-9 h-9 bg-white rounded-lg relative">
          <i class="ri-notification-4-line"></i>
          <div
            class="absolute w-2 h-2 rounded-full"
            style="background: #0c56c2; top: 3px; right: 6px"
          ></div>
        </button>
        <button class="w-9 h-9 bg-white rounded-lg">
          <i class="ri-more-line"></i>
        </button>
      </div>
    </div>

    <div class="flex mt-8 justify-between items-center w-full">
      <div class="flex flex-col items-start">
        <p
          class="uppercase text-xs"
          style="color: #74859cbd; font-family:'Poppins"
        >
          Boards
        </p>
        <div class="flex space-x-2 mt-1 items-center">
          <div class="py-1 px-2 rounded-lg bg-white">
            <i class="ri-fire-fill text-red-600"></i>
          </div>
          <h1
            class="text-lg font-semibold"
            style="color: #001a41; font-family:'Poppins"
          >
            Peceland App
          </h1>
        </div>
      </div>
      <div class="flex space-x-8 items-center">
        <div class="flex flex-col items-start">
          <p
            class="uppercase text-xs"
            style="color: #74859cbd; font-family:'Poppins"
          >
            Visibility
          </p>
          <div class="flex space-x-2 mt-1 items-center">
            <div class="">
              <i class="ri-lock-unlock-line"></i>
            </div>
            <h2
              class="text-sm font-semibold"
              style="color: #001a41; font-family:'Poppins"
            >
              Private Board
            </h2>
          </div>
        </div>
        <div class="flex flex-col items-start w-1/2">
          <p
            class="uppercase text-xs"
            style="color: #74859cbd; font-family:'Poppins"
          >
            Team
          </p>
          <div class="flex mt-1 items-center w-full">
            <div class="relative">
              <div class="w-7 h-7" style="z-index: 1000">
                <img
                  src="https://source.unsplash.com/100x100/?portrait"
                  alt=""
                  class="rounded-full"
                />
              </div>
              <div
                class="absolute top-0 w-7 h-7"
                style="left: 25px; z-index: 500px"
              >
                <img
                  src="https://source.unsplash.com/100x100/?portrait"
                  alt=""
                  class="rounded-full"
                />
              </div>
              <div
                class="absolute top-0 w-7 h-7"
                style="left: 49px; z-index: -50px"
              >
                <img
                  src="https://source.unsplash.com/100x100/?portrait"
                  alt=""
                  class="rounded-full"
                />
              </div>
              <div
                class="absolute top-0 w-7 h-7"
                style="left: 72px; z-index: -100px"
              >
                <img
                  src="https://source.unsplash.com/100x100/?portrait"
                  alt=""
                  class="rounded-full"
                />
              </div>
            </div>

            <span
              class="text-sm ml-20"
              style="color: #74859cbd; font-family:'Poppins"
              >+4</span
            >
            <span
              class="
                w-6
                h-6
                p-2
                rounded-lg
                flex
                items-center
                justify-center
                ml-2
              "
              style="background: #6c5ce76e"
            >
              <i class="ri-add-line text-base" style="color: #6c5ce7"></i>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- move to another component -->

    <Board />
    <div class="flex justify-end">
      <i class="ri-question-line" style="color: #6c5ce7"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>
<style>
input::placeholder {
  font-family: "Poppins";
}
input:focus {
  outline: none;
  box-shadow: none !important;
}
.__main {
  background: #74859c2e;
}
</style>
