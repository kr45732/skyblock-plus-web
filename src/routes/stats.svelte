<script>
  import Navbar from "../components/navbar.svelte";
  import Footer from "../components/footer.svelte";
  import { onMount } from "svelte";

  let stats;
  onMount(async () => {
    let data = await fetch(
      "https://api.allorigins.win/get?url=https://skyblock-plus.ml/api/public/get/stats"
    ).then((res) => res.json());
    stats = data;
  });
</script>

<div>
  <div class="bg-black h-screen text-white">
    <Navbar />
    {stats.guild_count}
    
    {stats.user_count}
    <Footer />
  </div>
</div>
