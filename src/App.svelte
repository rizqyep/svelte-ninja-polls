<script>
  import Tabs from "./shared/Tabs.svelte";
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";

  //tabs
  let items = ["Current Polls", "Add New Poll"];

  let activeItem = "Current Polls";
</script>

<Header />
<main>
  <Tabs {activeItem} {items} />
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
