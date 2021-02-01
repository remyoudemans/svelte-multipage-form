<script>
  import formData from '../../stores/formData'
  import animalFacts from '../../stores/animalFacts'
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

{#if $formData.favoriteAnimal}
  {#await $animalFacts}
    <p>....</p>
  {:then data}
    <h2>This is a fact about {$formData.favoriteAnimal}s:</h2>
    <p>{data}</p>
    <p>Are you sure that they're your favorite?</p>
  {:catch error}
    <p>An error has occurred :(</p>
  {/await}
{/if}
