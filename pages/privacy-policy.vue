<template>
  <div class="bg-dark-gray">
    <NavBar />
    <div>
      <article
        class="prose invert prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
      >
        <h1>{{ page.title }}</h1>
        <nuxt-content class="" :document="page" />
      </article>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
export default {
  // @ts-ignore stfu i dont care if it has any type
  async asyncData({ $content }) {
    const page = await $content("privacypolicy").fetch();
    return {
      page,
    };
  },
};
</script>
