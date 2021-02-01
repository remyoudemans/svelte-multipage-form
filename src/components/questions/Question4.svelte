<script>
  import formData from '../../stores/formData'

  let fact;
  let failed = false;
  let loading = false;

  $: {
    (async () => {
      if (!$formData.favoriteAnimal) {
        return;
      }

      loading = true;

      try {
        const res = await fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=${$formData.favoriteAnimal ?? 'cat'}`);

        if (!res.ok) {
          throw new Error('Failed to fetch cat fact')
        }

        const json = await res.json();
        fact = json.text;
      } catch(e) {
        failed = true;
        
      } finally {
        loading = false;
      }
    })()
  }
</script>

<label>
  Favorite animal
  <select bind:value={$formData.favoriteAnimal}>
    <option value="">Choose an animal</option>
    <option>cat</option>
    <option>dog</option>
    <option>horse</option>
  </select>
</label>

{#if loading}
  <p>....</p>
{:else if fact && $formData.favoriteAnimal}
  <h2>This is a fact about {$formData.favoriteAnimal}s:</h2>
  <p>{fact}</p>
  <p>Are you sure that they're your favorite?</p>
{/if}
