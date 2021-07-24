<script>
  import { tweened } from "svelte/motion";
  import Button from "./../shared/Button.svelte";
  import Card from "./../shared/Card.svelte";
  import PollStore from "../stores/PollStore.js";
  export let poll;

  $: totalVotes = poll.votesA + poll.votesB;
  $: percentA = Math.floor((poll.votesA / totalVotes) * 100) || 0;
  $: percentB = Math.floor((poll.votesB / totalVotes) * 100) || 0;

  //tweened percentage

  const tweenedA = tweened(0);
  const tweenedB = tweened(0);

  $: tweenedA.set(percentA);
  $: tweenedB.set(percentB);

  const handleVote = (option, id) => {
    PollStore.update((currentPolls) => {
      let copiedPolls = [...currentPolls];

      copiedPolls.forEach((poll) => {
        if (poll.id == id) {
          if (option == "a") {
            poll.votesA++;
          } else if (option == "b") {
            poll.votesB++;
          }
        }
      });

      return [...copiedPolls];
    });
  };

  const handleDelete = (id) => {
    PollStore.update((currentPolls) => {
      return currentPolls.filter((poll) => poll.id != id);
    });
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
      <div class="percent percent-a" style="width:{$tweenedA}%" />
      <span>{poll.answerA} ({poll.votesA}) </span>
    </div>

    <div
      class="answer"
      on:click={() => {
        handleVote("b", poll.id);
      }}
    >
      <div class="percent percent-b" style="width:{$tweenedB}%" />
      <span>{poll.answerB} ({poll.votesB}) </span>
    </div>

    <div class="delete">
      <Button type="primary" flat={true} on:click={() => handleDelete(poll.id)}
        >Delete</Button
      >
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

  .percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
    border-radius: 3px;
  }

  .percent-a {
    border-left: 7px solid rgba(217, 27, 66);
    background: rgba(217, 27, 66, 0.2);
  }
  .percent-b {
    border-left: 7px solid rgba(69, 196, 160);
    background: rgba(69, 196, 160, 0.2);
  }
</style>
