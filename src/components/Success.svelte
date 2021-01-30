<script>
  import { onMount } from 'svelte';

  let catFact;
  let failed = false;

  onMount(async () => {
    try {
      const res = await fetch('https://cat-fact.herokuapp.com/facts/random');

      if (!res.ok) {
        throw new Error('Failed to fetch cat fact')
      }

      const json = await res.json();
      catFact = json.text;
    } catch(e) {
      failed = true;
    }
	});
</script>

<h2>Thanks for your time! You are a ⭐ </h2>
<h3>Did you know?</h3>
<p>{failed ? 'Never mind. Nothing to see here' : catFact}</p>
