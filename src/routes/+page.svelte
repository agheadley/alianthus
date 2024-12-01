<script lang="ts">
import * as file from '$lib/file';
import * as util from '$lib/util';
import * as cfg from '$lib/test-cfg';

//let { data } = $props();


let files:any;


let pupil : {log:string,pid:number,mid:string,sn:string,pn:string,gnd:string,hse:string,tg:string,nc:number
			overall:{A:number,B:number},base:{type:string,A:number,B:number}[],groups:{lv:string,yr:number,sc:string,ss:string,g:string,pre:{A:number,B:number}}[]	}[]
	= [];

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


let insertPupil=async()=>{
	console.log('INSERTING : ',group);
	let response = await fetch('/api/insert', {
		method: 'POST',
		body: JSON.stringify({table:"pupil_table",data:pupil}),
		headers: {'content-type': 'application/json'}
	});
	let res= await response.json();
	console.log('INSERT',res);
};

let getGroup=(results:any)=>{


	group  = [];

	//console.log(typeof results);
	for(let row of results) {
		if(!group.find((el: { sc: any; ss: any; g: any; nc:any;})=>el.sc===row.sc && el.ss===row.ss && el.nc===Number(row.g_nc) && el.g===row.g)) {
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
				log:util.getDate()
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



let getPupil=async(results:any)=>{
	pupil=[];
	for (let row of results.filter((el: { type: string; })=>el.type==='pupil')) {
		if(!pupil.find(el=>el.pid===Number(row.pid))) {

			let i=cfg.random(0,2);
			let base = cfg.getBase(i);
			let f=base.find(el=>el.type==='overall');
			let overall = f ? {A:f.A,B:f.B} : {A:0,B:0};


			let gs : {lv:string,yr:number,ss:string,sc:string,g:string,pre:{A:number,B:number}}[]=[];
			let g = results.filter((el: { pid: any; })=>el.pid===row.pid).map((el: { lv: any; yr: any; ss: any; sc: any; g: any; })=>({lv:el.lv,yr:Number(el.yr),ss:el.ss,sc:el.sc,g:el.g}));
			if(g) {
				gs=cfg.getGroups(i,g);	
			}
			


			pupil.push ({
				log:util.getDate(),
				pid:Number(row.pid),
				mid:row.mid,
				nc:Number(row.pupil_nc),
				sn:row.sn,
				pn:row.pn,
				gnd:row.gnd,
				hse:row.hse,
				tg:row.tg,
				overall:overall,
				base:base,
				groups:gs
			});
		}
	}

	console.log(pupil);


};

let upload=async()=>{
	file.read(files[0],async(res:any)=>{
		console.log(res);

		console.log(cfg.base);

		let results:any=file.csvProcess(res);
		console.log(results);

		getGroup(results);
		getPupil(results);

		await insertGroup();
		await insertPupil();
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
