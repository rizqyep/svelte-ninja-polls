<script>
  export let poll;

  $: totalVotes = poll.votesA + poll.votesB;
</script>

<div class="poll">
  <h3>{poll.question}</h3>
  <p>Total Votes : {totalVotes}</p>
  <div class="answer">
    <div class="percent percent-a" />
    <span>{poll.answerA} ({poll.votesA}) </span>
  </div>

  <div class="percent percent-b" />
  <div class="answer">
    <span>{poll.answerB} ({poll.votesB}) </span>
  </div>
</div>

<style>
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
    margin: 10px auto;
    position: relative;
  }
  .answer:hover {
    opacity: 0.5;
  }
  .poll {
    padding: 10px 30px;
    border: 1px solid #eeeeee;
    box-shadow: 1px 2px 10px #cecece;
  }
  span {
    display: inline-block;
    padding: 10px 20px;
  }
</style>
