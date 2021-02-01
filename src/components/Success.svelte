<script>
  const getCatFact = async () => {
    const res = await fetch('https://cat-fact.herokuapp.com/facts/random');

    if (!res.ok) {
      throw new Error('Failed to fetch cat fact');
    }

    const json = await res.json();
    return json.text;
  };
</script>

<h2>Thanks for your time! You are a ⭐</h2>
<h3>Did you know?</h3>

{#await getCatFact()}
  <p>loading!</p>
{:then fact}
  <p>{fact}</p>
{:catch error}
  <p>No such luck. This is an error message.</p>
{/await}
