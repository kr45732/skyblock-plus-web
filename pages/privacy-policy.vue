<template>
  <div class="bg-dark-gray">
    <NavBar />
    <div>
      <article
        class="prose prose-sm prose-invert sm:prose lg:prose-lg xl:prose-2xl mx-auto"
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
  async asyncData({ $content }) {
    const page = await $content("privacypolicy").fetch();

    return {
      page,
    };
  },
};
</script>
