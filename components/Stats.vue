<template>
  <!-- <div class="text-white font-bold text-xl">
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <h1>Nuxt Mountains</h1>
      <ul>
        <li v-for="mountain of mountains" :key="mountain.title">
          {{ mountain.title }}
        </li>
      </ul>
    </div>
  </div> -->

  <div class="flex justify-center mb-0 p-12 grid-flow-row space-x-14">
    <div
      class="relative object-scale-down subpixel-antialiased px-4 py-2 font-extrabold text-xl text-center rounded-lg bg-red-700 w-36 h-18 text-white"
    >
      Servers<br />
      <h3 class="subpixel-antialiased font-semibold">1234</h3>
    </div>
    <div
      class="relative object-scale-down subpixel-antialiased px-4 py-2 font-extrabold text-xl text-center rounded-lg bg-red-700 w-36 h-18 text-white"
    >
      Users<br />
      <h3 class="subpixel-antialiased font-semibold">1234</h3>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "StatsComponent",
  data() {
    return {
      stats: [],
    };
  },
  async fetch() {
    this.stats = await fetch("https://api.nuxtjs.dev/mountains").then((res) =>
      res.json()
    );
  },
});
</script>
