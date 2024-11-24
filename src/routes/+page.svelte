<script lang="ts">

	let { data } = $props();
	
	let size = $state(2);
	let color = $state({r:34,g:127,b:34,o:0.1});

	let canvas:any;

$effect(() => {

	const context= canvas.getContext('2d');
	context.clearRect(0, 0, canvas.width, canvas.height);

	// this will re-run whenever `color` or `size` change
	context.fillStyle = `rgba(${color.r},${color.g},${color.b},${color.o})`;
	context.fillRect(0, 0, size, size);
});

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<canvas bind:this={canvas} width="100" height="100"></canvas>

</section>

<p>
<button onclick={()=>size+=2}>Increment</button>
<button onclick={()=>size-=2}>Decrement</button>
<button onclick={()=>color.o+=0.05}>Color</button>
</p>


<article>
	<h2>Supabase Select</h2>
	<div>
		<ul>
			{#each data.countries as country}
			  <li>{country.name}</li>
			{/each}
		  </ul>
	</div>
</article>

<style>
</style>
