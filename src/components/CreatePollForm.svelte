<script>
  let fields = { question: "", answerA: "", answerB: "" };

  const submitHandler = () => {
    console.log(fields);
  };
</script>

<form on:submit|preventDefault={submitHandler}>
  <div class="form-field">
    <label for="question">Poll Question</label>
    <input
      type="text"
      id="question"
      placeholder="Question text here"
      bind:value={fields.question}
    />
  </div>

  <div class="form-field">
    <label for="answer_a">Answer A</label>
    <input
      type="text"
      id="answer_a"
      placeholder="Answer Option A text here"
      bind:value={fields.answerA}
    />
  </div>

  <div class="form-field">
    <label for="answer_b">Answer B</label>
    <input
      type="text"
      id="answer_b"
      placeholder="Answer Option B text here"
      bind:value={fields.answerB}
    />
  </div>
  <button>Submit</button>
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }

  .form-field {
    margin: 18px auto;
  }

  input {
    width: 100%;
    border-radius: 6px;
  }

  label {
    margin: 10px auto;
    text-align: left;
  }
</style>
