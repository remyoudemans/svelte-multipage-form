<script>
  import * as questions from '../components/questions';
  import Success from '../components/Success.svelte';
  import Progress from '../components/Progress.svelte';

  let questionIndex = 0;

  const questionComponents = Object.values(questions);

  const decrementQuestion = () => {
    questionIndex = Math.max(questionIndex - 1, 0);
  };

  const incrementQuestion = () => {
    questionIndex = Math.min(questionIndex + 1, questionComponents.length - 1);
  };

  $: currentQuestion = questionComponents[questionIndex];

  let formSubmitted = false;
</script>

<main>
  <h1>Welcome to the form</h1>
  {#if !formSubmitted}
    <Progress value={questionIndex} max={questionComponents.length - 1} />

    <form>
      <div class="questionBox">
        <svelte:component this={currentQuestion} />
      </div>

      {#if questionIndex > 0}
        <button type="button" on:click|preventDefault={decrementQuestion}
          >Previous</button
        >
      {/if}

      {#if questionIndex < questionComponents.length - 1}
        <button type="submit" on:click|preventDefault={incrementQuestion}
          >Next</button
        >
      {:else}
        <button
          type="submit"
          on:click|preventDefault={() => (formSubmitted = true)}>Submit</button
        >
      {/if}
    </form>
  {:else}
    <div class="questionBox">
      <Success />
    </div>
    <button
      on:click={() => {
        questionIndex = 0;
        formSubmitted = false;
      }}>Go back to start?</button
    >
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .questionBox {
    padding: 2rem 0;
    min-height: 20rem;
    max-width: 50rem;
    margin: 2rem auto;
    border: 1px solid black;
    border-radius: 5px;
  }
</style>
