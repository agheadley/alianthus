<script lang="ts">
import {alert} from '$lib/cfg.svelte';


</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<section>
	<h4>Home</h4>
</section>

<p><button onclick={()=>alert.msg='Hello World!'}>Alert</button></p>


<style>
</style>
