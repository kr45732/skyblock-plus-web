<script>
  import Navbar from "../components/navbar.svelte";
  import Footer from "../components/footer.svelte";
  import { onMount } from "svelte";
  import Tab, { Label } from "@smui/tab";
  import TabBar from "@smui/tab-bar";
  import { Input } from "@smui/textfield";
  import Paper from "@smui/paper";
  import DataTable, { Head, Body, Row, Cell } from "@smui/data-table";
  import LinearProgress from "@smui/linear-progress";

  let value = undefined;
  let commands = [];
  let active = "General";
  let loaded = false;

  $: filteredCommands = value
    ? commands.filter((command) => command?.name.match(`${value}.*`))
    : commands.filter((command) => command?.category == active.toLocaleLowerCase());

  onMount(async () => {
    const response = await fetch(
      "https://api.allorigins.win/get?url=https://skyblock-plus.ml/api/public/get/commands"
    );
    const unparsed_json = await response.json();
    commands = JSON.parse(unparsed_json.contents);
    loaded = true;
  });
</script>

<link rel="stylesheet" href="node_modules/svelte-material-ui/bare.css" />

<div class="bg-black h-screen text-white overflow-scroll">
  <Navbar />

  <Paper class="solo-paper" elevation={6}>
    <Input bind:value placeholder="Search" class="solo-input" />
  </Paper>

  <div class="px-3 pt-3">
    <TabBar
      tabs={[
        "General",
        "Slayer",
        "Skills",
        "Dungeons",
        "Guild",
        "Price",
        "Inventory",
        "Miscellaneous",
        "Party",
        "Event",
        "Settings"
      ]}
      let:tab
      bind:active
    >
      <Tab {tab}>
        <Label style="color: white;">{tab}</Label>
      </Tab>
    </TabBar>
  </div>

  <div style="padding: 15px;">
    <DataTable table$aria-label="Command list" style="width: 100%;">
      <Head>
        <Row>
          <Cell>Name</Cell>
          <Cell>Description</Cell>
          <Cell>Usage</Cell>
          <Cell>Aliases</Cell>
        </Row>
      </Head>
      <Body>
        {#each filteredCommands as command}
          <Row>
            <Cell>{command?.name}</Cell>
            <Cell>{command?.description}</Cell>
            <Cell>{command?.usage}</Cell>
            <Cell>{command?.aliases}</Cell>
          </Row>
          {#each command?.subcommands as subcommand}
            <Row>
              <Cell>{command?.name} {subcommand?.name}</Cell>
              <Cell>{subcommand?.description}</Cell>
              <Cell>{command?.usage} {subcommand?.usage}</Cell>
              <Cell>{subcommand?.aliases}</Cell>
            </Row>
          {/each}
        {/each}
      </Body>

      <LinearProgress indeterminate bind:closed={loaded} aria-label="Loading..." slot="progress" />
    </DataTable>
  </div>

  <Footer />
</div>

<style>
  * :global(.solo-paper) {
    display: flex;
    align-items: center;
    flex-grow: 1;
    margin: 0 12px;
    padding: 0 12px;
    height: 48px;
  }
  * :global(.solo-paper > *) {
    display: inline-block;
    margin: 0 12px;
  }
  * :global(.solo-input) {
    flex-grow: 1;
    color: var(--mdc-theme-on-surface, #000);
  }
  * :global(.solo-input::placeholder) {
    color: var(--mdc-theme-on-surface, #000);
    opacity: 0.6;
  }
</style>
