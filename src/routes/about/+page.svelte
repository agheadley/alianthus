<script lang="ts">

import * as util from '$lib/util';

let test =async()=>{
		let response = await fetch('/api/read', {
		    method: 'POST',
		    body: JSON.stringify({table:"group_table"}),
		    headers: {'content-type': 'application/json'}
	    });
		let res= await response.json();
		console.log(res);

		let unique = util.unique(res,['lv','yr']);
		console.log(unique);

		//{ [key: string]: string } 
		let a : { [key: string]: any }[]= [
			{x:1,y:"b",z:"c",q:false},
			{x:2,y:"b",z:"c",q:false},
			{x:1,y:"b",z:"c",q:true},
			{x:3,y:"b",z:"c",q:false},
			{x:4,y:"b",z:"c",q:false},
			{x:1,y:"x",z:"c",q:false},
			
		]
		
		let b = ['x','z'];
		let c = b.map(el=>a[0][el]);

};

</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>



<section>
    <h4>about/</h4>
</section>


<p><button onclick={test}>Unique</button></p>
<style>

</style>