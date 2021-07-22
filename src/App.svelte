<script>
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import PollList from "./components/PollList.svelte";

  //tabs
  let items = ["Current Polls", "Add New Poll"];

  let activeItem = "Current Polls";

  const tabChange = (e) => {
    activeItem = e.detail;
  };

  const handleAdd = () => {
    activeItem = "Current Polls";
  };
</script>

<Header />
<main>
  <Tabs {activeItem} {items} on:tabChange={tabChange} />
  {#if activeItem == "Current Polls"}
    <PollList />
  {:else if activeItem === "Add New Poll"}
    <CreatePollForm on:add={handleAdd} />
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
