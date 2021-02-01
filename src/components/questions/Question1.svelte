<script>
  import formData from '../../stores/formData';
</script>

<label>
  Name
  <input type="text" bind:value={$formData.name} />
</label>
<p>
  {#if !$formData.name}
    Do you not have a name?
  {:else if $formData.name.length > 20}
    Wow! Your name is really long!
  {:else}
    Your name seems to be "{$formData.name}".
  {/if}
</p>
