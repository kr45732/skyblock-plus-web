<script>
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from "flowbite-svelte";
  let nonActiveClass =
    "btn btn-ghost btn-sm rounded-btn font-bold hover:opacity-75 w-full md:btn md:btn-ghost md:btn-sm md:rounded-btn md:font-bold md:hover:opacity-75 md:w-full md:px-2";
</script>

<Navbar
  let:hidden
  let:toggle
  class="bg-red-800 text-white md:py-0"
  fluid="true"
>
  <NavBrand href="/">
    <img
      src="favicon.png"
      class="mr-3 h-6 sm:h-9 rounded-full"
      alt="Skyblock Plus Logo"
    />
    <span class="self-center whitespace-nowrap text-xl font-semibold"
      >Skyblock Plus</span
    >
  </NavBrand>
  <NavHamburger
    on:click={toggle}
    btnClass="ml-3 md:hidden hover:bg-transparent focus:ring-transparent"
  />
  <NavUl {hidden} {nonActiveClass}>
    <NavLi href="/commands">Commands</NavLi>
    <NavLi href="/features">Features</NavLi>
    <NavLi href="/linked-roles">Linked Roles</NavLi>
    <NavLi href="https://dsc.gg/sb+">Invite</NavLi>
    <NavLi href="https://dsc.gg/skyblock-plus">Discord</NavLi>
    <NavLi href="https://github.com/kr45732">GitHub</NavLi>
    <NavLi href="https://www.patreon.com/skyblock_plus">Pateron</NavLi>
  </NavUl>
</Navbar>
