<template>
  <div class="h-screen bg-dark-gray">
    <div>
      <NavBar />
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
      <InviteButton />
      <Stats />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
  head: {
    meta: [
      {
        hid: 'description',
        name: 'Skyblock Plus',
        content: 'A Discord bot with many commands & customizable features to improve the experience for SkyBlock players and guild staff!'
      }
    ],
  }
});
</script>
