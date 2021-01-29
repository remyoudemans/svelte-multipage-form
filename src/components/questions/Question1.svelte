<script>
  let name = '';
</script>

<label>
  Name
  <input type='text' bind:value={name} />
</label>
<p>
  {#if !name}
    Do you not have a name?
  {:else if name.length > 20}
    Wow! Your name is really long!
  {:else}
    Your name seems to be "{name}".
  {/if}
</p>
