<script lang="ts">
	import '../app.css';
	import Alert from '$lib/_Alert.svelte';

	let { children } = $props();
</script>

	<div class="app">
	<!-- simple css adjusted so .container used instead of body - body margin:0 added too to appp.css-->
	<Alert></Alert>
	<div class="container">
	<header>
		<nav>
			<a href="/">Home</a>
			<a href="/assessments">Assessments</a>
			<a href="/testbed">Testbed</a>
			
			<a href="/about">About</a>
			<a href="https://simplecss.org/demo" target=”_blank”>SimpleCSS Guide</a>
		  </nav>
		  <p>Svelte5 - Typescript -  Supabase - SimpleCSS - Anthony</p>
	  </header>
	
	  	<main>
			{@render children()}
	
		</main>
	
	  <footer>
		<p>Anthony Headley</p>
	  </footer>
	</div>
</div>

	

<style>

</style>
