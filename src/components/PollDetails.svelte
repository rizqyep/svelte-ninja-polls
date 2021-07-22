<script>
  import { createEventDispatcher } from "svelte";
  import Card from "./../shared/Card.svelte";
  export let poll;
  let dispatch = createEventDispatcher();
  $: totalVotes = poll.votesA + poll.votesB;

  const handleVote = (option, id) => {
    dispatch("castVote", { option, id });
  };
</script>

<Card>
  <div class="poll">
    <h3>{poll.question}</h3>
    <p>Total Votes : {totalVotes}</p>
    <div
      class="answer"
      on:click={() => {
        handleVote("a", poll.id);
      }}
    >
      <div class="percent percent-a" />
      <span>{poll.answerA} ({poll.votesA}) </span>
    </div>

    <div class="percent percent-b" />
    <div
      class="answer"
      on:click={() => {
        handleVote("b", poll.id);
      }}
    >
      <span>{poll.answerB} ({poll.votesB}) </span>
    </div>
  </div>
</Card>

<style>
  .poll {
    text-align: left;
  }
  h3 {
    margin: 0 auto;
    color: #555;
  }
  p {
    margin-top: 6px;
    font-size: 14px;
    color: #aaaa;
    margin-bottom: 30px;
  }
  .answer {
    background: #e9e9e9;
    cursor: pointer;
    text-align: left;
    margin: 10px auto;
    position: relative;
  }
  .answer:hover {
    opacity: 0.5;
  }
  span {
    display: inline-block;
    padding: 10px 20px;
  }
</style>
