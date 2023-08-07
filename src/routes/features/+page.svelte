<script type="ts">
  import Navbar from "../../components/navbar.svelte";
  import Footer from "../../components/footer.svelte";

  // guild roles/ranks
  let featureList = [
    {
      title: "Automatic Applications",
      description: "System that automatically manages guild applications.",
      commands:
        "- /setup\n- /settings guild create\n- /settings guild <name> apply enable\n- /settings guild <name> apply message <message>\n- /settings guild <name> apply channel <#channel>\n- /settings guild <name> apply category <category>\n- /settings guild <name> apply accept_message <message>\n- /settings guild <name> apply deny_message <message>\n- /settings guild <name> apply staff_channel <#channel>\n- /settings guild <name> apply staff_roles add <@role>",
      images: ["apply.png", "apply1.png", "apply2.png", "apply3.png"]
    },
    {
      title: "Automatic Verification",
      description:
        "System that manages verification of members automatically. Can be configured to update verified roles, nickname, verify remove role, and more.",
      commands:
        "- /setup\n- /settings verify enable\n- /settings verify message <message>\n- /settings verify role add <@role>\n- /settings verify channel <#channel>\n- /settings verify nickname [prefix] [IGN] [postfix]\n- /settings verify remove_role <@role>",
      images: ["verification.png", "verification1.png"]
    },
    {
      title: "Automatic Skyblock Roles",
      description:
        "System that automatically skyblock roles. Can be configured with over 40 different type of roles!",
      commands:
        "- /setup\n- /settings roles enable\n- /settings roles add <role_name> <value> <@role>\n- /settings roles set <role_name> <@role>\n- /settings roles use_highest <enable|disable>",
      images: ["roles.png", "roles1.png"]
    },
    {
      title: "Skyblock Event",
      description:
        "Create Skyblock competitions in skills, slayers, dungeons, collections, and more! Can be configured to set the required guild, prizes, minimum amount, maximum amount, required roles, and more.",
      commands: "- /event create\n- /event join [profile]\n- /event leaderboard",
      images: ["event.png", "event1.png"]
    },
    {
      title: "Farming Contests",
      description:
        "Get notifications five minutes before a farming contest starts with the crops of the contest.",
      commands:
        "- /settings jacob enable\n- /settings jacob channel <#channel>\n- /settings jacob add <crop|all> [@role]\n- /jacob",
      images: ["farming.png", "farming1.png"]
    },
    {
      title: "Mayor Elections",
      description:
        "A live view of the current election. Shows perks, vote count, and a graph of the vote counts. Sends notifications when the election closes.",
      commands:
        "- /settings set mayor_channel <#channel>\n- /settings set mayor_ping <@role>\n- /mayor",
      images: ["mayor.png", "mayor1.png"]
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
        <div class="feature-text">
          <div class="feature-title">
            <a href="commands?category=settings">{feature.title}</a>
          </div>
          <div class="feature-description">
            {feature.description}
          </div>
          <div class="feature-commands">
            {feature.commands}
          </div>
        </div>

        <div class="feature-images">
          {#each feature.images as image}
            <img src="features/{image}" alt={image} />
          {/each}
        </div>
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
    padding: 10px;
  }

  .feature-text {
    flex: 1.2;
  }

  .feature-images {
    flex: 0.8;
    padding-left: 100px;
    text-align: right;
  }

  @media only screen and (max-width: 800px) {
    .feature-images {
      padding-top: 15px;
      padding-left: 0px;
    }

    .feature-text {
      width: 100%;
    }

    .feature {
      flex-direction: column;
    }
  }

  .feature {
    padding-top: 10px;
    padding-bottom: 10px;
    overflow: auto;
    display: flex;
  }

  .features {
    padding-right: 15%;
    padding-left: 15%;
    margin-bottom: 100px;
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
    border-top: 5px solid rgba(255, 255, 255, 0.26);
    border-style: dotted;
  }
</style>
