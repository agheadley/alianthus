<script lang="ts">
import * as icon from '$lib/icon';
import * as util from '$lib/util';
import {groups,user,isCoreReady,setIsCoreReady} from '$lib/cfg.svelte';


const getCore=async()=>{
	let response = await fetch('/api/read', {
		method: 'POST',
		body: JSON.stringify({table:"group_table"}),
		headers: {'content-type': 'application/json'}
	});
	let res= await response.json();
	console.log(res);

	//groups=res;

	let subjects = util.unique(res,['lv','yr','ss','sc']).map(el=>({nc:el.nc,lv:el.lv,yr:el.yr,sc:el.sc,ss:el.ss,sl:el.ss}));
	console.log(subjects);

	let years=util.unique(subjects,['lv','yr']);
	console.log(years);

	setIsCoreReady(true);
	
};


$effect(() => {
    $inspect(isCoreReady);
	if(!isCoreReady) getCore();
	
    
});

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="ailanthus" />
</svelte:head>


<section>

	<blockquote>
		Harvesting core data and obtaining user status ...
	</blockquote>

</section>



<style>


</style>
