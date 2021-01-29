<script>
  import * as questions from '../components/questions'

  let questionIndex = 0;

  const questionComponents = Object.values(questions);

  const decrementQuestion = () => {
    questionIndex = Math.max(questionIndex - 1, 0);
  };

  const incrementQuestion = () => {
    questionIndex = Math.min(questionIndex + 1, questionComponents.length - 1);
  };

  $: currentQuestion = questionComponents[questionIndex];

  // TODO: make it stop submitting
  // TODO: also make it save to store!!
</script>

<main>
  <h1>Welcome to the form</h1>
  <h2>You are on question {questionIndex}</h2>

  <form on:submit={() => false}>
  <svelte:component this={currentQuestion} />

  {#if questionIndex > 0}
    <button on:click={decrementQuestion}>Previous</button>
  {/if}

  {#if questionIndex < questionComponents.length - 1}
    <button on:click={incrementQuestion}>Next</button>
  {:else}
    <button on:click={() => console.log('submitted!')}>Submit</button>
  {/if}
  </form>
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
</style>
