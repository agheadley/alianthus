<script lang="ts">
import * as icon from '$lib/icon';

let download=():void=>{

}

let create=async():Promise<void>=>{

}

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<section>
	<div class="row">
		<div class="col">
			Cohort
		</div>
		<div class="col">
			Subject
		</div>
		<div class="col">
			My Sets
		</div>
		<div class="col">
			<a title="CREATE" href={'javascript:void(0)'} onclick={create}>{@html icon.plusCircle()}</a>&nbsp;&nbsp;
			<a title="DOWNLOAD" href={'javascript:void(0)'} onclick={download}>{@html icon.download()}</a>&nbsp;&nbsp;
			<a title="ARCHIVE" href={'javascript:void(0)'} onclick={create}>{@html icon.archive()}</a>
		
		
		</div>


	</div>
</section>



<style>

.row {
	display:flex;
	justify-content: space-between;
}

.col {
	padding:1rem;
}
</style>
