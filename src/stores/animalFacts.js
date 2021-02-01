import { derived } from 'svelte/store';

import formData from './formData';

export default derived(formData, async ({ favoriteAnimal }) => {
  if (!favoriteAnimal) {
    return undefined;
  }

  const res = await fetch(
    `https://cat-fact.herokuapp.com/facts/random?animal_type=${favoriteAnimal}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch cat fact');
  }

  const json = await res.json();

  return json.text;
});
