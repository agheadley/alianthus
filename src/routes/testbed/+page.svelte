<script lang="ts">

let imageUrls=$state({public:'',private:''});

let readData:any=$state({});


let size = $state(2);
let color = $state({r:34,g:127,b:34,o:0.1});
let canvas:any;

let getPublicImageUrl=async()=>{
    let response = await fetch('/api/storage/public', {
		    method: 'POST',
		    body: JSON.stringify({fileName:'download.svg'}),
		    headers: {'content-type': 'application/json'}
	    });
    let res= await response.json();
    console.log(res);
    imageUrls.public=res.url ? res.url : '';
};


let getPrivateImageUrl=async()=>{
    let response = await fetch('/api/storage/private', {
		    method: 'POST',
		    body: JSON.stringify({fileName:'user.svg'}),
		    headers: {'content-type': 'application/json'}
	    });
    let res= await response.json();
    console.log(res);
    imageUrls.private=res.url ? res.url : '';
};


let read=async()=>{
		let response = await fetch('/api/read', {
		    method: 'POST',
		    body: JSON.stringify({}),
		    headers: {'content-type': 'application/json'}
	    });
		readData= await response.json();
		console.log($state.snapshot(readData));
		
};

$effect(() => {
    $inspect('$effect',color,size);
    const context= canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    // this will re-run whenever `color` or `size` change
    context.fillStyle = `rgba(${color.r},${color.g},${color.b},${color.o})`;
    context.fillRect(0, 0, size, size);
});

</script>

<svelte:head>
	<title>Testbed</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<article>
    <h4>Supabase Storage Buckets</h4>
    <p>
        <button onclick={getPublicImageUrl}>Get Public Image URL</button>
        {#if imageUrls.public!==''}<img src={imageUrls.public} alt='images'/>{:else}Click to load ...{/if}
    </p>
    <p>public URLs are open by default</p>
    
    <p>
        <button onclick={getPrivateImageUrl}>Get Private Image URL</button>
        {#if imageUrls.private!==''}<img src={imageUrls.private} alt='images'/>{:else}Click to load ...{/if}
    </p>

    <p><a href="https://supabase.com/dashboard/project/iwwsyzhjxrgrpztmpixv/storage/policies" target="_blank">Setting createSignedUrl() access</a></p>
</article>


<article>
    <h4>Getting Started - Select *</h4>
    <div>
		<p><button onclick={read}>Read Data</button></p>
        {#if readData.countries}
		<ul>
			{#each readData.countries as country}
			  <li>{country.name}</li>
			{/each}
		  </ul>
        {:else} 
            Click to read ...
        {/if}
	</div>
	<p><a href="https://vercel.com/anthony-headleys-projects/ailanthus/stores/integration/store_P2rwINOj7ZEjiSo0/guides" target=”_blank”>Getting Started</a></p>

</article>


<article>
    <h4>$effect()</h4>
    <div>
        <canvas style="border:1px solid black;" bind:this={canvas} width="100" height="100"></canvas>
        <p>
            <button onclick={()=>size+=2}>Increment</button>
            <button onclick={()=>size-=2}>Decrement</button>
            <button onclick={()=>color.o+=0.05}>Color</button>
        </p>
    </div>
</article>

<style>


</style>