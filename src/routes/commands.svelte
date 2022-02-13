<script>
  import Navbar from "../components/navbar.svelte";
  import Footer from "../components/footer.svelte";
  import { onMount } from "svelte";

  let search = undefined;
  let commands = [];

  $: filteredCommands = search
    ? commands.filter((command) => command.name.match(`${search}.*`))
    : commands;

  onMount(async function () {
    const response = await fetch(
      "https://api.allorigins.win/get?url=https://skyblock-plus.ml/api/public/get/commands"
    );
    const unparsed_json = await response.json();
    commands = JSON.parse(unparsed_json.contents);
  });
</script>

<div class="bg-black h-screen text-white overflow-scroll">
  <Navbar />
  {#if commands.length > 0}
    <div style="padding: 15px;">
      <input
        type="search"
        bind:value={search}
        class="ms-auto w-auto"
        style="color: black; padding-left: 10px; margin-bottom: 10px;"
        placeholder="Search for a command..."
      />

      <table style="width: 100%;">
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Usage</th>
          <th>Aliases</th>
        </tr>
        {#each filteredCommands as command}
          <tr>
            <td>{command?.name}</td>
            <td>{command?.description}</td>
            <td>{command?.usage}</td>
            <td>{command?.aliases}</td>
          </tr>
          {#each command.subcommands as subcommand}
            <tr>
              <td>{command?.name} {subcommand?.name}</td>
              <td>{subcommand?.description}</td>
              <td>{command?.usage} {subcommand?.usage}</td>
              <td>{subcommand?.aliases}</td>
            </tr>
          {/each}
        {/each}
      </table>
    </div>
  {:else}
    <h1>Loading..</h1>
  {/if}
  <Footer />
</div>

<style>
  th,
  td {
    border: 1px solid white;
  }
</style>
