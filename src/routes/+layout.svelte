<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

	<div class="app">
	<div class="container">
	<header>
		<nav>
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="https://simplecss.org/demo" target=”_blank”>SimpleCSS</a>
		  </nav>
		  <p>Anthony's test site.</p>
	  </header>
	
	  	<main>
			{@render children()}
	
		</main>
	
	  <footer>
		<p>Anthony's test site. SvelteKit / ts</p>
	  </footer>
	</div>
</div>

	

<style>

</style>
