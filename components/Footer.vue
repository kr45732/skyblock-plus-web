<template>
  <footer class="fixed inset-x-0 w-full bottom-0 pb-3 bg-footer-color">
    <div class="container mx-auto px-4">
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4">
          <div class="text-lg text-white font-semibold py-4">
            Copyright © {{ date }} Skyblock Plus
            <div class="text-sm text-white">
              Website made by
              <a class="text-red-600" href="https://github.com/TrashCan69420"
                >TrashCan#8913</a
              >
            </div>
          </div>
        </div>
        <div class="w-full md:w-8/12 px-4">
          <ul class="flex flex-wrap list-none md:justify-end justify-center">
            <l
              class="text-white hover:text-gray-400 text-lg font-semibold block py-1 px-3"
              ><a href="privacy-policy">privacy policy</a></l
            >
            <l
              class="text-white hover:text-gray-400 text-lg font-semibold block py-1 px-3"
              ><a href="terms-of-service">TOS</a></l
            >
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FooterComponent",
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
});
</script>
