<script>
  import Button from "./../shared/Button.svelte";
  let fields = { question: "", answerA: "", answerB: "" };

  let errors = { question: "", answerA: "", answerB: "" };

  let valid = false;

  const submitHandler = () => {
    valid = true;

    //Validate Question
    if (fields.question.trim().length < 5) {
      valid = false;
      errors.question = "Question need to be 5 letter minimal";
    } else {
      errors.question = "";
    }
    //Validate answer a
    if (fields.answerA.trim().length < 5) {
      valid = false;
      errors.answerA = "Answer A need to be 5 letter minimal";
    } else {
      errors.answerA = "";
    }
    //Validate answer b

    if (fields.answerB.trim().length < 5) {
      valid = false;
      errors.answerB = "Answer Bneed to be 5 letter minimal";
    } else {
      errors.answerA = "";
    }
  };

  if (valid) {
    console.log("valid!", fields);
  } else {
    console.log("validation error!", errors);
  }
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
  <span class="error">{errors.question}</span>

  <div class="form-field">
    <label for="answer_a">Answer A</label>
    <input
      type="text"
      id="answer_a"
      placeholder="Answer Option A text here"
      bind:value={fields.answerA}
    />
    <span class="error">{errors.answerA}</span>
  </div>

  <div class="form-field">
    <label for="answer_b">Answer B</label>
    <input
      type="text"
      id="answer_b"
      placeholder="Answer Option B text here"
      bind:value={fields.answerB}
    />
    <span class="error">{errors.answerB}</span>
  </div>
  <Button type="secondary" flat={false}>Submit</Button>
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
  .error {
    font-weight: bold;
    color: red;
    font-size: 14px;
  }
</style>
