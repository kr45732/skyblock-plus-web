<script>
    import Navbar from "../lib/navbar.svelte";
    import Footer from "../lib/footer.svelte";
    import { onMount } from "svelte";
    let stats = {};

    onMount(async () => {
        stats = await (await fetch("https://api.sbplus.codes/stats")).json();
    });
</script>

<div>
    <div class="bg-zinc-900 h-screen text-white overflow-auto no-scrollbar">
        <Navbar />
        <div class="hero min-h-screen">
            <div class="text-center hero-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Skyblock Plus</h1>
                    <p class="mb-5 text-xl">
                        A Discord bot with many commands & customizable features
                        to improve the experience for SkyBlock players and guild
                        staff!
                    </p>
                    <button
                        class="btn bg-red-700 hover:bg-red-600 border-red-700 hover:border-red-600 text-white"
                        ><a href="/invite">Invite Me</a></button
                    >
                    <div
                        class="flex justify-center mb-0 p-12 grid-flow-row space-x-14"
                    >
                        <div
                            class="relative object-scale-down subpixel-antialiased px-4 py-2 font-extrabold text-xl text-center rounded-lg bg-red-700 w-36 h-18 text-white"
                        >
                            Servers<br />
                            <h3 class="subpixel-antialiased font-semibold">
                                {stats.guild_count?.toLocaleString() ||
                                    "Loading..."}
                            </h3>
                        </div>
                        <div
                            class="relative object-scale-down subpixel-antialiased px-4 py-2 font-extrabold text-xl text-center rounded-lg bg-red-700 w-36 h-18 text-white"
                        >
                            Users<br />
                            <h3 class="subpixel-antialiased font-semibold">
                                {stats.user_count?.toLocaleString() ||
                                    "Loading..."}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</div>
