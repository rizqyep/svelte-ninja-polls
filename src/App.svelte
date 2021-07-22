<script>
  import Tabs from "./shared/Tabs.svelte";
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";

  //tabs
  let items = ["Current Polls", "Add New Poll"];

  let activeItem = "Current Polls";

  const tabChange = (e) => {
    activeItem = e.detail;
  };
</script>

<Header />
<main>
  <Tabs {activeItem} {items} on:tabChange={tabChange} />
  {#if activeItem == "Current Polls"}
    <p>Poll List Component Goes Here</p>
  {:else if activeItem === "Add New Poll"}
    <p>Add New Polls Component</p>
  {/if}
</main>
<Footer />

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 960px;
    margin: 40px auto;
  }
</style>
