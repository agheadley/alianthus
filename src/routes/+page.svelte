<script lang="ts">
import * as file from '$lib/file';
import * as util from '$lib/util';
//let { data } = $props();


let files:any;



let group:  {	yr:number;lv:string,nc:number,sc:string,ss:string,sl:string,g:string,log:string,
				pupil:{pid:number,nc:number,sn:string,pn:string,gnd:string,hse:string}[],teacher:{tid:string,sal:string}[]}[] 
			=[];




let insertGroup=async()=>{
	console.log('INSERTING : ',group);
	let response = await fetch('/api/insert', {
		method: 'POST',
		body: JSON.stringify({table:"group_table",data:group}),
		headers: {'content-type': 'application/json'}
	});
	let res= await response.json();
	console.log('INSERT',res);
};

let getGroup=(results:any)=>{


	group  = [];

	//console.log(typeof results);
	for(let row of results) {
		if(!group.find((el: { sc: any; ss: any; g: any; nc:any;})=>el.sc===row.sc && el.ss===row.ss && el.nc===Number(row.g_nc))) {
			group.push({
				yr:Number(row.yr),
				lv:row.lv,
				nc:Number(row.g_nc),
				sc:row.sc,
				ss:row.ss,
				sl:row.sl,
				g:row.g,
				pupil:[],
				teacher:[],
				log:util.getDateTime()
			});
		}
	}

	console.log(group);

	
	for(let row of group) {
		let f=results.filter((el: { g: string; g_nc: number; type: string; })=>el.g===row.g && Number(el.g_nc)===row.nc && el.type==='pupil');
		f = f ? 
			f.sort((a: { sn: string; pn: string; },b: { sn: any; pn: any; })=>a.sn.localeCompare(b.sn) || a.pn.localeCompare(b.pn)).map((el: { pid: any; pupil_nc: any; pn: any; sn: any; gnd: any; hse: any; })=>({pid:Number(el.pid),nc:Number(el.pupil_nc),pn:el.pn,sn:el.sn,gnd:el.gnd,hse:el.hse})) 
			: [];
		row.pupil=f;
	}

	

	for(let row of group) {
		let f=results.filter((el: { g: string; g_nc: number; type: string; })=>el.g===row.g && Number(el.g_nc)===row.nc && el.type==='teacher');
		f = f ? 
			f.sort((a: { sn: string; pn: string; },b: { sn: any; pn: any; })=>a.sn.localeCompare(b.sn) || a.pn.localeCompare(b.pn)).map((el: { tid: any; sal: any; })=>({tid:el.tid,sal:el.sal})) 
			: [];
		row.teacher=f;
	}

	console.log(group);

	group=group.filter(el=>el.g!==null);

	console.log(group);

	
};

let upload=async()=>{
	file.read(files[0],async(res:any)=>{
		console.log(res);

		let results:any=file.csvProcess(res);
		console.log(results);

		getGroup(results);

		await insertGroup();
	});

};




</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<section>
	<h4>Home</h4>
</section>

<article>
<h2>Process table data</h2>
<p> <input name="file1" type="file" bind:files /></p>
<p> <button disabled='{!files}' class="button dark" on:click={upload}>Upload</button></p>

</article>

<style>
</style>
