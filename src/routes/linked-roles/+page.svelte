<script type="ts">
  import Navbar from "../../lib/navbar.svelte";
  import Footer from "../../lib/footer.svelte";
</script>

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/svelte-material-ui@6.0.0-beta.14/bare.min.css"
/>

<div class="bg-zinc-900 h-screen text-white overflow-auto no-scrollbar">
  <Navbar />

  <div class="features">
    <hr />
    <div class="feature">
      <div class="feature-text">
        <div class="feature-title">What Are Linked Roles?</div>
        <div class="feature-description">
          <a href="https://support.discord.com/hc/en-us/articles/8063233404823"
            >Linked roles</a
          > alow server members to connect to their favorite applications to display
          even more details about those applications. They are similar to auto-roles
          or reaction-roles but allow the display of more information! For this bot,
          linked roles can be used as a verified role, different statistic requirements,
          or just to display statistics about a player.
        </div>
      </div>

      <div class="feature-images">
        <img src="features/linked-roles.png" alt="linked-roles.png" />
      </div>
    </div>
    <hr />

    <div class="feature">
      <div class="feature-text">
        <div class="feature-title">Creating Linked Roles</div>
        <div class="feature-description">
          To create a Linked role, head into Server Settings > Roles > Create
          new role > Links. After creating a new role or choosing an existing
          role, you will see a new tab at the top labeled Links. Press on add
          requirement and select Skyblock Plus. Now you can choose what
          requirements a member must have (if any). All four statistics &
          verified will also be shown under application connections on your
          profile.
        </div>
      </div>

      <div class="feature-images">
        <img src="features/linked-roles1.png" alt="linked-roles1.png" />
      </div>
    </div>
    <hr />

    <div class="feature">
      <div class="feature-text">
        <div class="feature-title">Obtaining Linked Roles</div>
        <div class="feature-description">
          To create a Linked role, head into Server Settings > Linked Roles.
          Select the linked role you just created and follow the instructions to
          connect your Discord account to Skyblock Plus. Note that you will be
          redirected outside of Discord to
          <a href="https://verify.sbplus.codes/">https://verify.sbplus.codes/</a
          >. The bot will
          <b>NEVER</b> ask you to connect your Microsoft account so don't fall for
          those kind of verification scams! One you complete all the steps and meet
          any set requirements, you will have the linked role!
        </div>
      </div>

      <div class="feature-images">
        <img src="features/linked-roles2.png" alt="linked-roles2.png" />
        <img src="features/linked-roles3.png" alt="linked-roles3.png" />
      </div>
    </div>
    <hr />

    <div class="feature">
      <div class="feature-text">
        <div class="feature-title">Linked Role Features</div>
        <div class="feature-description">
          You will now be able to see the linked role on your profile. For
          channels that have a linked role as a permission override, you will be
          able to see a tag in the chat. You can also see if a member is
          verified, their statistics, and Skyblock profile. Feel free to contact
          me if you have any questions, concerns, or comments!
        </div>
      </div>

      <div class="feature-images">
        <img src="features/linked-roles4.png" alt="linked-roles4.png" />
        <img src="features/linked-roles5.png" alt="linked-roles5.png" />
        <img src="features/linked-roles6.png" alt="linked-roles6.png" />
      </div>
    </div>
    <hr />
  </div>
  <Footer />
</div>

<style>
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
      align-self: center;
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
