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
			<a href="/blog">Blog</a>
			<a href="/notes">Notes</a>
			<a href="/guestbook">Guestbook</a>
			<a href="/contact">Contact</a>
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
