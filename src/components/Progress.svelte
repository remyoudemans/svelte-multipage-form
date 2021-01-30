<script>
  export let value = 0;
  export let max;

  import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const progress = tweened(value, {
		duration: 400,
		easing: cubicOut
	});

  $: {
    $progress = value;
  }
</script>

<label>
  <progress value={$progress} max={max}/>
  {value / max * 100}%
</label>
