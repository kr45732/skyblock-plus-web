<template>
  <div class="bg-dark-gray mb-24">
    <div>
      <NavBar />
      <article
        class="prose invert prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
      >
        <h1>{{ page.title }}</h1>
        <nuxt-content class="" :document="page" />
      </article>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  // @ts-ignore stfu i don't care if it has any type
  async asyncData({ $content }) {
    const page = await $content("termsofservice").fetch();
    return {
      page,
    };
  },
};
</script>
