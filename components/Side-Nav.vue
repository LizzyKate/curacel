<template>
  <div class="flex flex-col h-screen px-5 py-8 bg-white text-gray-800">
    <div class="space-y-3">
      <div class="flex space-x-2 justify-center items-center">
        <div>
          <i class="ri-dashboard-fill" style="color: #0c56c2"></i>
        </div>
        <h2
          class="text-lg font-semibold"
          style="color: #001a41; font-family:'Poppins"
        >
          BoardJect
        </h2>
      </div>
      <div></div>
      <div>
        <button
          class="
            flex
            mt-8
            py-2
            px-4
            items-center
            justify-between
            rounded-2xl
            border
            w-full
          "
        >
          <span class="flex items-center space-x-2">
            <span
              class="
                w-6
                h-6
                flex
                items-center
                justify-center
                rounded-full
                bg-red-500
              "
              ><i class="ri-fire-fill" style="color: white"></i
            ></span>
            <span class="text-xs flex flex-col items-start">
              <span style="color: #74859c; font-family:'Inter"> Workspace</span>
              <span
                class="text-sm font-semibold"
                style="
                  color: #001a41;
                  font-family: 'Poppins';
                  letter-spacing: 0.03em;
                "
                >Fireart</span
              >
            </span>
          </span>
          <span>
            <i class="ri-arrow-down-s-line"></i>
          </span>
        </button>
      </div>
      <!-- <div class="relative">
        <span class="absolute inset-y-0 left-0 flex items-center py-4">
          <button
            type="submit"
            class="p-2 focus:outline-none focus:shadow-outline"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 512 512"
              class="w-5 h-5 text-gray-600"
            >
              <path
                d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"
              ></path>
            </svg>
          </button>
        </span>
        <input
          type="search"
          name="Search"
          placeholder="Search..."
          class="
            w-full
            py-2
            pl-10
            text-sm
            border-transparent
            rounded-md
            focus:outline-none
            bg-gray-100
            text-gray-800
            focus:bg-gray-50
          "
        />
      </div> -->
      <div class="flex-1">
        <div class="accordion pt-8" id="accordionExample">
          <div class="accordion-item bg-white">
            <h2 class="accordion-header mb-0" id="headingOne">
              <button
                class="
                  accordion-button
                  relative
                  flex
                  items-center
                  w-full
                  py-4
                  px-5
                  text-base text-gray-800 text-left
                  border-0
                  rounded-none
                  transition
                  focus:outline-none
                "
                style="border: none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <i class="ri-home-4-line"></i>
                <span class="text-sm ml-2">Home</span>
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div
                class="accordion-body mt-2 p-2 rounded-2xl"
                style="background: rgba(12, 86, 194, 0.1)"
              >
                <ul class="accordion-list space-y-1 text-sm">
                  <li class="__list p-1">
                    <a
                      href="#"
                      class="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <i class="ri-search-line text-gray-600"></i>
                      <span>Search</span>
                    </a>
                  </li>
                  <li class="__list p-1">
                    <a
                      href="#"
                      class="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <i class="ri-chat-1-line text-gray-600"></i>
                      <span>Chat</span>
                    </a>
                  </li>
                  <li class="__list p-1">
                    <a
                      href="#"
                      class="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <i class="ri-settings-2-line text-gray-600"></i>
                      <span>Settings</span>
                    </a>
                  </li>
                  <li class="__list p-1">
                    <a
                      href="#"
                      class="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <i class="ri-logout-box-line text-gray-600"></i>
                      <span>Logout</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white">
            <h2 class="accordion-header text-sm mb-0" id="headingTwo">
              <button
                class="
                  collapsed
                  relative
                  flex
                  items-center
                  w-full
                  py-4
                  px-5
                  text-base text-gray-800 text-left
                  bg-white
                  border-0
                  rounded-none
                  transition
                  focus:outline-none
                "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <i class="ri-calendar-line text-gray-600"></i>
                <span class="text-sm ml-2">Calendar</span>
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            ></div>
          </div>
          <div class="accordion-item bg-white">
            <h2 class="accordion-header mb-0" id="headingThree">
              <button
                class="
                  collapsed
                  relative
                  flex
                  items-center
                  w-full
                  py-4
                  px-5
                  text-base text-gray-800 text-left
                  bg-white
                  border-0
                  rounded-none
                  transition
                  focus:outline-none
                "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <i class="ri-message-2-fill text-gray-600"></i>
                <span class="text-sm ml-2">Message</span>
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex mt-auto items-center p-2 space-x-4 justify-self-end">
      <img
        src="https://source.unsplash.com/100x100/?portrait"
        alt=""
        class="w-10 h-10 rounded-full"
      />
      <div>
        <h2
          class="text-sm font-semibold"
          style="color: #001a41; font-family:'Poppins"
        >
          Leroy Jenkins
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import "tw-elements";
export default {
  name: "side-nav",
};
</script>

<style>
.accordion-button::after {
  width: 0.9rem;
  height: 0.9rem;
  background-size: 0.9rem;
}
.accordion-button:not(.collapsed) {
  background: #6c5ce7;
  color: white !important;
  border-radius: 16px !important;
}
.accordion-button:not(.collapsed)::after {
  fill: white;
}
.__list {
  color: #74859c;
}
.__list:hover {
  background: #0c56c230;
  border-radius: 16px;
  color: #0c56c2;
}
</style>