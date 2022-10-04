<script type="ts">
  import Navbar from "../../components/navbar.svelte";
  import Footer from "../../components/footer.svelte";
  import LayoutGrid, { Cell } from "@smui/layout-grid";

  // apply, event, verify
  let featureList = [
    {
      title: "Farming Contests",
      description:
        "Get notifications five minutes before a farming contest starts with the crops of the contest.",
      commands:
        "- /settings jacob enable\n- /settings jacob disable\n- /settings jacob channel <#channel>\n- /settings jacob add <crop>\n- /settings jacob remove <crop>\n- /jacob",
      images: ["farming.png", "farming1.png"]
    },
    {
      title: "Mayor Elections",
      description:
        "A live view of the current election. Shows perks, vote count, and a graph of the vote counts. Sends notifications when the election closes.",
      commands:
        "- /settings set mayor_channel <#channel>\n- /settings set mayor_ping <@role>\n- /mayor",
      images: ["mayor.png", "mayor2.png", "mayor3.png"]
    },
    {
      title: "Fetchur Notifications",
      description:
        "A daily notification for the current fetchur item. Message is sent at 12am EST.",
      commands:
        "- /settings set fetchur_channel <#channel>\n- /settings set fetchur_ping <@role>\n- /fetchur",
      images: ["fetchur.png"]
    },
    {
      title: "Party Finder",
      description:
        "A customizable party finder system in Discord to improve your dungeons experience. You can set the floor, wanted classes, and requirements. Allows to create, join, manage, and disband parties. A private thread channel is created once the party is full which can be closed by the party leader.",
      commands:
        "- /party create\n- /party current\n- /party join <username>\n- /party leave\n- /party list\n- /party disband\n- /party kick <username>",
      images: ["party.png", "party1.png"]
    }
  ];
</script>

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/svelte-material-ui@6.0.0-beta.14/bare.min.css"
/>

<div class="bg-zinc-900 h-screen text-white overflow-scroll">
  <Navbar />

  <div class="features">
    <hr />
    {#each featureList as feature}
      <div class="feature">
        <LayoutGrid>
          <Cell spanDevices={{ desktop: 6, tablet: 4, phone: 2 }}>
            <div class="feature-title">{feature.title}</div>
            <div class="feature-description">
              {feature.description}
            </div>
            <div class="feature-commands">
              {feature.commands}
            </div>
          </Cell>
          {#each feature.images as image}
            <Cell spanDevices={{ desktop: 6, tablet: 4, phone: 2 }}>
              <img src="features/{image}" alt={image} />
            </Cell>
            <Cell spanDevices={{ desktop: 6, tablet: 4, phone: 2 }} />
          {/each}
        </LayoutGrid>
      </div>
      <hr />
    {/each}
  </div>
  <Footer />
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    /* padding-bottom: 0px;
    padding-top: 0px;
    margin-top: 0px;
    margin-bottom: 0px; */
  }
  .features {
    width: 100%;
    padding-right: 200px;
    padding-left: 200px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 70px;
  }
  .feature-commands {
    margin-top: 15px;
    border-left: 3px solid rgb(223, 5, 5);
    color: rgb(161, 161, 161);
    font-family: "JetBrains Mono", monospace;
    max-width: 100%;
    padding: 0.5em 1em;
    white-space: pre-line;
  }
  .feature-title {
    font-size: 50px;
    font-family: "Roboto";
  }
  .feature-description {
    font-family: "Roboto";
  }
  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.26);
  }
</style>
