<script lang="ts">

	let { data } = $props();
	
	let size = $state(2);
	let color = $state({r:34,g:127,b:34,o:0.1});

	let canvas:any;

	let imageUrl=$state('');

	let test=async()=>{
		let response = await fetch('/edge/storage', {
		    method: 'POST',
		    body: JSON.stringify({name:'download.svg',type:'public'}),
		    headers: {'content-type': 'application/json'}
	    });
		let res= await response.json();
        console.log(res);
		imageUrl=res.url ? res.url : '';

	};

	let testPrivate=async()=>{
		let response = await fetch('/edge/storage', {
		    method: 'POST',
		    body: JSON.stringify({name:'user.svg',type:'private'}),
		    headers: {'content-type': 'application/json'}
	    });
		let res= await response.json();
        console.log(res);
		imageUrl=res.url ? res.url : '';

	};



$effect(() => {

	console.log('onMount .... $effect');
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

<p>
	<button onclick={test}>Test public images url</button>
	
	<img src={imageUrl} alt='images'/>
</p>

<p>
	<button onclick={testPrivate}>Test private images url</button>
	
	<img src={imageUrl} alt='images'/>

</p>


<p><img alt='img' src="https://iwwsyzhjxrgrpztmpixv.supabase.co/storage/v1/object/sign/private/user.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcml2YXRlL3VzZXIuc3ZnIiwiaWF0IjoxNzMyNzI3MzQxLCJleHAiOjE3MzMzMzIxNDF9.m3EaDO77nBJu3HC0zO-6WMpAjXckMU4LXkH-7zfsIV4&t=2024-11-27T17%3A08%3A49.636Z"/></p>

<article>
	<h2>Supabase Select</h2>
	<div>
		<ul>
			{#each data.countries as country}
			  <li>{country.name}</li>
			{/each}
		  </ul>
	</div>
	<p>https://vercel.com/anthony-headleys-projects/ailanthus/stores/integration/store_P2rwINOj7ZEjiSo0/guides</p>
</article>

<style>
</style>
