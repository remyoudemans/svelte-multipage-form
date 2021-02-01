<script>
  import formData from '../../stores/formData';
</script>

<label>
  Favorite color
  <input type="color" bind:value={$formData.favoriteColor} />
</label>

<style>
  input {
    padding: 0;
  }
</style>
