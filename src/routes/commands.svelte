<script type="ts">
  import Navbar from "../components/navbar.svelte";
  import Footer from "../components/footer.svelte";
  import { onMount } from "svelte";
  import Tab, { Label } from "@smui/tab";
  import TabBar from "@smui/tab-bar";
  import { Input } from "@smui/textfield";
  import Paper from "@smui/paper";
  import DataTable, { Head, Body, Row, Cell } from "@smui/data-table";
  import LinearProgress from "@smui/linear-progress";
  import Fuse from "fuse.js";
  import { HelpData } from "../components/HelpData.js";

  let value = ""; // Search
  let commands: HelpData[] = [];
  let active = "General"; // Selected tab
  let loaded = false;
  let fuse: Fuse<any>;
  let commandIndex: any[] = []; // {name, index}

  $: filteredCommands =
    value.length > 0
      ? fuse.search(value).map((r) => commands[r.item.index])
      : commands.filter((command) => command?.getCategory?.() == active.toLowerCase());

  onMount(async () => {
    function mapCommands(command: HelpData) {
      let subcommandsProcessed: HelpData[] = [];
      for (const subcommand of command?.subcommands) {
        subcommandsProcessed.push(mapCommands(HelpData.from(subcommand).setSuperCommand(command)));
      }
      return command.addSubcommands(subcommandsProcessed);
    }

    function flattenCommands(command: HelpData) {
      let out = [command];
      for (const subcommand of command.subcommands) {
        if (subcommand instanceof HelpData) {
          out.push(...flattenCommands(subcommand));
        }
      }
      return out;
    }

    const response = await fetch(
      "https://api.allorigins.win/get?url=https://skyblock-plus.ml/api/public/get/commands"
    );
    let preCommands = JSON.parse((await response.json()).contents);

    let mappedCommands = [];
    for (const command of preCommands) {
      mappedCommands.push(mapCommands(HelpData.from(command)));
    }
    for (const command of mappedCommands) {
      commands.push(...flattenCommands(command));
    }

    for (let i = 0; i < commands.length; i++) {
      commandIndex.push({ name: commands[i].getName(), index: i });
    }

    fuse = new Fuse(commandIndex, {
      findAllMatches: true,
      keys: ["name"]
    });
    loaded = true;
  });
</script>

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/svelte-material-ui@6.0.0-beta.14/bare.min.css"
/>

<div class="bg-zinc-900 h-screen text-white overflow-scroll">
  <Navbar />

  <Paper class="solo-paper" elevation={6} style="background-color: #292d2e;">
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
    <DataTable
      table$aria-label="Command list"
      style="max-width: 98vw; min-width: 98vw; margin-bottom: 70px; overflow-x: hidden; background-color: #292d2e;"
    >
      <Head>
        <Row>
          <Cell class="mdc-data-table__header-cell">Name</Cell>
          <Cell class="mdc-data-table__header-cell">Description</Cell>
          <Cell class="mdc-data-table__header-cell">Usage</Cell>
          <Cell class="mdc-data-table__header-cell">Aliases</Cell>
        </Row>
      </Head>
      <Body>
        {#each filteredCommands as command}
          <Row>
            <Cell class="mdc-data-table__cell">{command?.getName?.()}</Cell>
            <Cell class="mdc-data-table__cell">{command?.getDescription?.()}</Cell>
            <Cell class="mdc-data-table__cell">{command?.getUsageFormatted?.()}</Cell>
            <Cell class="mdc-data-table__cell">{command?.getAliases?.()}</Cell>
          </Row>
        {/each}
      </Body>

      <LinearProgress indeterminate bind:closed={loaded} aria-label="Loading..." slot="progress" />
    </DataTable>
  </div>

  <Footer />
</div>

<style>
  * :global(.mdc-data-table__cell),
  * :global(.mdc-data-table__header-cell) {
    overflow: visible;
    max-width: min-content;
    white-space: pre-line;
    color: rgb(209 213 219);
    background-color: #292d2e;
    padding-top: 8px;
    padding-bottom: 8px;
  }
  * :global(.mdc-data-table__header-cell) {
    font-weight: bold;
  }
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
    color: var(--mdc-theme-on-surface, rgb(209 213 219));
  }
  * :global(.solo-input::placeholder) {
    color: var(--mdc-theme-on-surface, rgb(209 213 219));
    opacity: 0.6;
  }
</style>
