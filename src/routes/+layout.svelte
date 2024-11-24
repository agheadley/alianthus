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
		  </nav>
		  <p>Hello!!</p>
	  </header>
	
	  	<main>
			{@render children()}
	
		</main>
	
	  <footer>
		<p>Jane Smith's website.</p>
	  </footer>
	</div>
</div>

	

<style>

</style>
