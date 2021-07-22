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

  let polls = [
    {
      id: 1,
      question: "Python or JS?",
      answerA: "Python",
      answerB: "JS",
      votesA: 9,
      votesB: 25,
    },
  ];

  const addNewPoll = (e) => {
    let poll = e.detail;
    polls = [poll, ...polls];
    console.log(polls);
    activeItem = "Current Polls";
  };

  const handleVote = (e) => {
    const { id, option } = e.detail;

    let copiedPolls = [...polls];

    let upvotedPoll = copiedPolls.find((poll) => {
      return poll.id == id;
    });

    if (option == "a") {
      upvotedPoll.votesA++;
    } else if (option == "b") {
      upvotedPoll.votesB++;
    }
  };
</script>

<Header />
<main>
  <Tabs {activeItem} {items} on:tabChange={tabChange} />
  {#if activeItem == "Current Polls"}
    <PollList {polls} on:vote={handleVote} />
  {:else if activeItem === "Add New Poll"}
    <CreatePollForm on:addNewPoll={addNewPoll} />
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
