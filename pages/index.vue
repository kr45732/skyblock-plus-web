<template>
  <div class="h-screen bg-dark-gray">
    <NavBar />
    <Footer />
    <div>
      <h1
        class="flex justify-center mb-0 p-12 font-semibold text-8xl text-red-700"
      >
        SkyBlock Plus
      </h1>
      <h3
        class="flex justify-center text-center font-bold mb-0 p-0 text-xl text-white"
      >
        A Discord bot with many commands & customizable<br />
        features to improve the experience for SkyBlock players<br />
        and guild staff!
      </h3>
      <div class="flex justify-center p-5">
        <a href="https://dsc.gg/inv-skyblock-plus"
          ><button
            class="rounded-lg px-4 py-2 border-2 border-red-600 bg-red-600 text-white font-semibold hover:bg-red-800 hover:border-red-800 hover:text-white duration-300"
          >
            Invite Now
          </button></a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
});
</script>
