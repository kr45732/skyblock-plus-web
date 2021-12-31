<script>
  import Navbar from "../components/navbar.svelte";
  import Footer from "../components/footer.svelte";
</script>

<div class=" text-white">
  <div class="bg-black h-screen">
    <Navbar />
    <div class="hero h-screen">
      <div class="text-center hero-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Skyblock Plus</h1>
          <p class="mb-5 text-xl">
            A Discord bot with many commands & customizable
            features to improve the experience for SkyBlock players
            and guild staff!
          </p>
          <button class="btn btn-primary"
            ><a href="https://dsc.gg/inv-skyblock-plus">Inivte Me</a></button
          >
        </div>
      </div>
    </div>

    <Footer />
  </div>
</div>
